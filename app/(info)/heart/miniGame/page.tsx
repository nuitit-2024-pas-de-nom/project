"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Page() {
  const [score, setScore] = useState(0);
  const [oxygenLevel, setOxygenLevel] = useState(100); // Niveau d'oxygène de Billy
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("");
  const [billyPosition, setBillyPosition] = useState({ x: 50, y: 50 }); // Position de Billy

  const oxygenBubblePosition = useRef({ x: 0, y: 0 }); // Position de la bulle d'oxygène
  const pollutionPositions = useRef([]); // Liste des positions de la pollution
  const pollutionFrequency = useRef(3000); // Fréquence d'apparition de la pollution en ms
  const timerRef = useRef(null);
  const pollutionTimerRef = useRef(null);

  const moveSpeed = 5; // Vitesse de mouvement de Billy

  // Fonction pour démarrer le jeu
  const startGame = () => {
    setScore(0);
    setOxygenLevel(100);
    setMessage("");
    setIsPlaying(true);

    // Réinitialiser la position de Billy
    setBillyPosition({ x: 50, y: 50 });

    // Définir la position initiale des bulles d'oxygène et de pollution
    randomizePositions();

    // Timer pour l'oxygène
    timerRef.current = setInterval(() => {
      if (oxygenLevel <= 0) {
        setIsPlaying(false);
        setMessage("Game Over! Vous avez épuisé tout l'oxygène.");
        clearInterval(timerRef.current);
        clearInterval(pollutionTimerRef.current);
      } else {
        setOxygenLevel((prev) => prev - 0.1); // L'oxygène diminue progressivement
      }
    }, 1000);

    // Timer pour ajouter de la pollution régulièrement
    pollutionTimerRef.current = setInterval(() => {
      addPollution();
    }, pollutionFrequency.current);
  };

  // Générer des positions aléatoires pour les bulles d'oxygène et la pollution
  const randomizePositions = () => {
    oxygenBubblePosition.current = { x: Math.random() * 100, y: Math.random() * 100 };
  };

  // Ajouter de la pollution
  const addPollution = () => {
    const newPollution = { x: Math.random() * 100, y: Math.random() * 100 };
    pollutionPositions.current.push(newPollution);
    if (pollutionPositions.current.length > 10) {
      pollutionPositions.current.shift(); // Limiter le nombre de pollutions visibles à 10
    }
  };

  // Gérer les déplacements de Billy avec les touches directionnelles
  const moveBilly = (direction) => {
    if (!isPlaying) return;

    setBillyPosition((prev) => {
      let newX = prev.x;
      let newY = prev.y;

      if (direction === "left" && newX > 0) newX -= moveSpeed;
      if (direction === "right" && newX < 100) newX += moveSpeed;
      if (direction === "up" && newY > 0) newY -= moveSpeed;
      if (direction === "down" && newY < 100) newY += moveSpeed;

      // Vérifier si Billy a touché la bulle d'oxygène
      if (
        Math.abs(newX - oxygenBubblePosition.current.x) < 5 &&
        Math.abs(newY - oxygenBubblePosition.current.y) < 5
      ) {
        setScore((prev) => prev + 1);
        setOxygenLevel((prev) => Math.min(prev + 5, 100)); // Regénère un peu d'oxygène
        randomizePositions(); // Générer une nouvelle position pour la bulle d'oxygène
      }

      // Vérifier si Billy a touché la pollution
      pollutionPositions.current.forEach((pollution) => {
        if (
          Math.abs(newX - pollution.x) < 5 &&
          Math.abs(newY - pollution.y) < 5
        ) {
          setOxygenLevel((prev) => Math.max(prev - 10, 0)); // Perdre de l'oxygène si on touche la pollution
        }
      });

      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    // Ajouter un écouteur d'événements pour les touches directionnelles
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") moveBilly("left");
      if (e.key === "ArrowRight") moveBilly("right");
      if (e.key === "ArrowUp") moveBilly("up");
      if (e.key === "ArrowDown") moveBilly("down");
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <div className="p-4 flex flex-col items-center">
      <Link href={"/heart"} className="btn btn-primary mb-4">
        Désoxygénation
      </Link>

      <h1 className="text-2xl font-bold">Désoxygénation : Sauvez Billy !</h1>
      <p className="text-gray-600">Collectez des bulles d'oxygène et évitez la pollution !</p>

      {!isPlaying && (
        <button
          onClick={startGame}
          className="btn bg-green-500 text-white mt-4 hover:bg-green-600"
        >
          Commencer le jeu
        </button>
      )}

      {isPlaying && (
        <div
          className="relative w-[400px] h-[400px] bg-blue-200 border-4 border-black mt-6"
        >
          <div
            className="absolute bg-red-500 w-5 h-5 rounded-full"
            style={{
              top: `${billyPosition.y}%`,
              left: `${billyPosition.x}%`,
            }}
          ></div>
          <div
            className="absolute bg-green-500 w-5 h-5 rounded-full"
            style={{
              top: `${oxygenBubblePosition.current.y}%`,
              left: `${oxygenBubblePosition.current.x}%`,
            }}
          ></div>
          {pollutionPositions.current.map((pollution, index) => (
            <div
              key={index}
              className="absolute bg-gray-500 w-5 h-5 rounded-full"
              style={{
                top: `${pollution.y}%`,
                left: `${pollution.x}%`,
              }}
            ></div>
          ))}
        </div>
      )}

      <p className="text-lg mt-4">Score : {score}</p>
      <p className="text-blue-500 mt-2">Niveau d'oxygène : {oxygenLevel.toFixed(1)}%</p>
      <p className="text-red-500 mt-2">{message}</p>
    </div>
  );
}