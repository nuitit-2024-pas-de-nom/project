"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    // Générer des éléments aléatoires
    const interval = setInterval(() => {
      if (!isGameOver) {
        setItems((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: Math.random() > 0.5 ? "plastic" : "trash",
            position: {
              left: Math.random() * 80 + "%",
              top: "0%",
            },
          },
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameOver]);

  useEffect(() => {
    if (lives <= 0) {
      setIsGameOver(true);
    }
  }, [lives]);

  const handleItemClick = (id, type) => {
    if (type === "plastic") {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }
    setItems(items.filter((item) => item.id !== id));
  };

  const handleMiss = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setLives(lives - 1);
  };

  return (
    <div className="p-4">
      <Link href={"/virus"} className="btn btn-primary mb-4">
        Pollution des eaux
      </Link>

      <h1 className="text-2xl font-bold">Mini-jeu : Nettoyez les océans</h1>

      {!isGameOver ? (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg">Score : {score}</p>
            <p className="text-lg">Vies : {lives}</p>
          </div>

          {/* Zone de jeu */}
          <div className="relative w-full h-[500px] bg-blue-300 rounded overflow-hidden">
            {items.map((item) => (
              <div
                key={item.id}
                className={`absolute w-12 h-12 ${
                  item.type === "plastic" ? "bg-green-500" : "bg-red-500"
                } rounded-full flex items-center justify-center cursor-pointer`}
                style={{
                  left: item.position.left,
                  top: item.position.top,
                }}
                onClick={() => handleItemClick(item.id, item.type)}
              >
                {item.type === "plastic" ? "♻️" : "🗑️"}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold">Partie terminée !</h2>
          <p className="text-lg">Votre score : {score}</p>
          <button
            onClick={() => {
              setScore(0);
              setLives(3);
              setIsGameOver(false);
              setItems([]);
            }}
            className="btn btn-primary mt-4"
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
}