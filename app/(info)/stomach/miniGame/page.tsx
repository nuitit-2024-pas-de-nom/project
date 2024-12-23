"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const questions = [
    {
      id: 1,
      title: "Associez les actions écologiques",
      items: [
        "Utilisation des transports publics",
        "Déréglementation des énergies fossiles",
        "Réduction des déchets plastiques",
        "Utilisation d'énergies renouvelables",
        "Éviter le gaspillage alimentaire",
      ],
      correct: [
        "Utilisation des transports publics",
        "Utilisation d'énergies renouvelables",
        "Réduction des déchets plastiques",
        "Éviter le gaspillage alimentaire",
      ],
    },
    {
      id: 2,
      title: "Associez les effets du CO₂ sur l'océan",
      items: [
        "Acidification des eaux",
        "Réchauffement de l'océan",
        "Prolifération des coraux",
        "Perte de biodiversité marine",
      ],
      correct: ["Acidification des eaux", "Perte de biodiversité marine"],
    },
    {
      id: 3,
      title: "Associez les solutions contre l'acidification",
      items: [
        "Réduire l'usage de combustibles fossiles",
        "Plantation de forêts",
        "Utilisation des énergies renouvelables",
        "Reforestation des mangroves",
      ],
      correct: [
        "Réduire l'usage de combustibles fossiles",
        "Utilisation des énergies renouvelables",
        "Reforestation des mangroves",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleDragStart = (item: string) => {
    setDraggedItem(item);
  };

  const handleDrop = () => {
    if (draggedItem && questions[currentQuestion].correct.includes(draggedItem)) {
      setAnswers((prev) => [...prev, draggedItem]);
      setScore(score + 1);
    }
    setDraggedItem(null);
  };

  const isCompleted = answers.length === questions[currentQuestion].correct.length;

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswers([]);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="p-4">
      <Link href={"/stomach"} className="btn btn-primary mb-4">
        Acidification
      </Link>
      <h1 className="text-2xl font-bold">Jeu : Réduire les émissions de CO₂</h1>

      {!isFinished ? (
        <>
          <p className="mt-4 text-lg">{questions[currentQuestion].title}</p>

          <div className="mt-6 flex gap-4">
            {/* Drag items */}
            <div className="w-1/2 p-4 bg-blue-100 rounded">
              <h2 className="text-lg font-bold mb-2">Actions possibles</h2>
              <ul className="space-y-2">
                {questions[currentQuestion].items.map((item) => (
                  <li
                    key={item}
                    draggable
                    onDragStart={() => handleDragStart(item)}
                    className="p-2 bg-white border rounded shadow cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Drop zone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="w-1/2 p-4 bg-green-100 rounded flex flex-col items-center justify-center"
            >
              <h2 className="text-lg font-bold mb-2">Zone de sélection</h2>
              <div className="min-h-[100px] w-full bg-green-200 rounded flex items-center justify-center">
                {answers.length === 0 && <p>Glissez les bonnes solutions ici</p>}
                <ul className="space-y-2">
                  {answers.map((answer, index) => (
                    <li
                      key={index}
                      className="p-2 bg-white border rounded shadow cursor-default"
                    >
                      {answer}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {isCompleted && (
            <button
              onClick={handleNextQuestion}
              className="btn btn-primary mt-4"
            >
              Question suivante
            </button>
          )}
        </>
      ) : (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-bold mb-4">Félicitations !</h2>
          <p>
            Vous avez terminé le jeu avec un score de <span className="font-bold">{score}</span> sur{" "}
            <span className="font-bold">{questions.reduce((sum, q) => sum + q.correct.length, 0)}</span>.
          </p>
        </div>
      )}
    </div>
  );
}