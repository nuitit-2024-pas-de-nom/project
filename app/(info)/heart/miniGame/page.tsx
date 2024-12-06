"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Page() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5); // Durée du jeu (en secondes)
  const lastClickTime = useRef(0);

  const targetInterval = 500; // Temps cible entre les clics (en ms)
  const tolerance = 200; // Tolérance sur le rythme (en ms)

  const startGame = () => {
    setScore(0);
    setMessage("");
    setIsPlaying(true);
    setTimeRemaining(5);
    lastClickTime.current = 0;

    // Décompte du temps
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsPlaying(false);
          setMessage("Temps écoulé ! Score final : " + score);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleClick = () => {
    if (!isPlaying) return;

    const now = Date.now();
    if (lastClickTime.current === 0) {
      lastClickTime.current = now;
      setScore(score + 1);
    } else {
      const interval = now - lastClickTime.current;
      if (
        interval >= targetInterval - tolerance &&
        interval <= targetInterval + tolerance
      ) {
        setScore(score + 1);
        setMessage("Bon rythme !");
      } else {
        setMessage("Trop rapide ou trop lent !");
        setIsPlaying(false);
      }
      lastClickTime.current = now;
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <Link href={"/heart"} className="btn btn-primary mb-4">
        Désoxygénation
      </Link>

      <h1 className="text-2xl font-bold">Cliquez au bon rythme !</h1>
      <p className="text-gray-600">
        Essayez de cliquer sur le carré toutes les 0.5 secondes pendant 5
        secondes.
      </p>

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
          onClick={handleClick}
          className="bg-blue-500 w-32 h-32 mt-6 flex items-center justify-center text-white text-xl font-bold cursor-pointer"
        >
          Clic !
        </div>
      )}

      <p className="text-lg mt-4">Score : {score}</p>
      <p className="text-red-500 mt-2">{message}</p>

      <p className="text-gray-500 mt-2">
        Temps restant : {isPlaying ? timeRemaining : 0} sec
      </p>
    </div>
  );
}