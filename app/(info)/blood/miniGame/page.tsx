"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const boardSize = 20; // Taille de la grille (20x20)
  const initialSnake = [{ x: 10, y: 10 }]; // Position initiale du serpent
  const directions = { ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 }, ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 } };

  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(generateFood(initialSnake));
  const [direction, setDirection] = useState(directions.ArrowRight);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Générer de la nourriture à une position aléatoire
  function generateFood(snake) {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize),
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }

  // Gérer le mouvement du serpent
  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      setSnake(prevSnake => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Vérifier les collisions
        if (
          newHead.x < 0 ||
          newHead.y < 0 ||
          newHead.x >= boardSize ||
          newHead.y >= boardSize ||
          prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
        ) {
          setIsGameOver(true);
          return prevSnake;
        }

        // Manger la nourriture
        let newSnake = [newHead, ...prevSnake];
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(score + 1);
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop(); // Rétrécir le serpent si pas de nourriture mangée
        }
        return newSnake;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [direction, food, isGameOver]);

  // Gérer les entrées utilisateur pour changer la direction
  useEffect(() => {
    const handleKeyDown = e => {
      if (directions[e.key] && !isGameOver) {
        const newDirection = directions[e.key];
        // Empêcher le serpent de faire demi-tour directement
        if (
          snake.length > 1 &&
          snake[1].x === snake[0].x + newDirection.x &&
          snake[1].y === snake[0].y + newDirection.y
        ) {
          return;
        }
        setDirection(newDirection);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [snake, isGameOver]);

  return (
    <div className="p-4">
      <Link href={"/blood"} className="btn btn-primary mb-4">
        Mauvaise circulation
      </Link>

      <h1 className="text-2xl font-bold">Mini-jeu : Snake</h1>

      <div className="mt-4">
        <p className="text-lg">Score : {score}</p>

        {!isGameOver ? (
          <div
            className="relative bg-gray-800 w-[400px] h-[400px] grid"
            style={{
              gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
              gridTemplateRows: `repeat(${boardSize}, 1fr)`,
            }}
          >
            {/* Afficher le serpent */}
            {snake.map((segment, index) => (
              <div
                key={index}
                className="bg-green-500"
                style={{
                  gridColumn: segment.x + 1,
                  gridRow: segment.y + 1,
                }}
              ></div>
            ))}

            {/* Afficher la nourriture */}
            <div
              className="bg-red-500"
              style={{
                gridColumn: food.x + 1,
                gridRow: food.y + 1,
              }}
            ></div>
          </div>
        ) : (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold">Partie terminée !</h2>
            <p className="text-lg">Votre score final : {score}</p>
            <button
              onClick={() => {
                setSnake(initialSnake);
                setFood(generateFood(initialSnake));
                setDirection(directions.ArrowRight);
                setScore(0);
                setIsGameOver(false);
              }}
              className="btn btn-primary mt-4"
            >
              Rejouer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}