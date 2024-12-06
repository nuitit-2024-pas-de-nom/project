"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-4 flex flex-col items-center">
      <Link href={"/show-billy"} className="btn btn-primary">
        Go Back
      </Link>

      <h1 className="text-2xl font-bold mt-4">Désoxygénation</h1>

      <div
        className={`flip-card w-64 h-64 mt-6 ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front bg-blue-500 text-white p-4 rounded shadow flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">Impact de la désoxygénation</h2>
            <p>
              La prolifération de phytoplancton consomme beaucoup d'oxygène, créant des zones mortes dans les eaux
              profondes.
            </p>
            <p className="text-gray-500">(Cliquer pour révéler)</p>
          </div>
          <div className="flip-card-back bg-green-500 text-white p-4 rounded shadow flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">Solutions</h2>
            <p>
              Réduire les émissions de gaz à effet de serre et limiter les excès de nutriments provenant de l'agriculture
              pour restaurer les écosystèmes marins.
            </p>
          </div>
        </div>
      </div>

      <Link href="/heart/miniGame" className="btn bg-green-500 text-white hover:bg-green-600 mt-4">
        Play
      </Link>
    </div>
  );
}