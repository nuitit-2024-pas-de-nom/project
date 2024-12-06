"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const [elements, setElements] = useState([]);
  const [message, setMessage] = useState("");
  const [badRemoved, setBadRemoved] = useState(0);

  // Génère 6 éléments aléatoires
  useEffect(() => {
    const newElements = Array.from({ length: 6 }, (_, index) => ({
      id: index + 1,
      type: index < 3 ? "bad" : "good", // 3 mauvais et 3 bons
      x: Math.random() * 300,
      y: Math.random() * 300,
    }));
    setElements(newElements);
  }, []);

  // Gérer le clic sur un élément
  const handleClick = (id, type) => {
    if (type === "bad") {
      setBadRemoved(badRemoved + 1);
      setElements((prev) => prev.filter((el) => el.id !== id));

      if (badRemoved + 1 === 3) {
        setMessage("Bravo ! Vous avez supprimé tous les mauvais éléments !");
      }
    } else {
      setMessage("Ce n'est pas un mauvais élément !");
    }
  };

  return (
    <div className="p-4">
      <Link href={"/head"} className="btn btn-primary mb-4">
        Stratification
      </Link>

      <h1 className="text-2xl font-bold">Nettoyez la zone</h1>
      <p className="text-gray-600">Cliquez sur les mauvais éléments pour les retirer !</p>
      <p className="text-green-500 mt-2">{message}</p>

      <div
        className="relative border border-gray-400 bg-gray-100 mt-4"
        style={{ width: "400px", height: "400px", position: "relative" }}
      >
        {/* Rendre chaque élément */}
        {elements.map((element) => (
          <div
            key={element.id}
            onClick={() => handleClick(element.id, element.type)}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
              element.type === "bad" ? "bg-red-500" : "bg-blue-500"
            }`}
            style={{
              top: element.y,
              left: element.x,
            }}
          >
            {element.type === "bad" ? "M" : "B"}
          </div>
        ))}
      </div>
    </div>
  );
}