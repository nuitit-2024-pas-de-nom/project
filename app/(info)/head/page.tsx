"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [isFlipped, setIsFlipped] = useState(false); // État pour gérer le flip

  return (
    <div className="p-4 flex flex-col items-center">
      {/* Bouton de retour */}
      <Link href={"/show-billy"} className="btn btn-primary">
        Go Back
      </Link>

      {/* Titre */}
      <h1 className="text-2xl font-bold mt-4">Stratification</h1>

      {/* Carte avec effet de flip */}
      <div
        className={`flip-card w-64 h-64 mt-6 ${isFlipped ? "flipped" : ""}`} // w-64 pour une largeur plus étroite
        onClick={() => setIsFlipped(!isFlipped)} // Toggle flip au clic
      >
        <div className="flip-card-inner">
          {/* Face avant */}
          <div className="flip-card-front bg-blue-500 text-white p-4 rounded shadow flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">Impact de la stratification</h2>
            <p>
              Le réchauffement des océans limite les échanges entre les couches d'eau, réduisant l'oxygène et les
              nutriments disponibles.
            </p>
            <p className="text-gray-500">(Cliquer pour révéler)</p>
          </div>

          {/* Face arrière */}
          <div className="flip-card-back bg-green-500 text-white p-4 rounded shadow flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">Solutions</h2>
            <p>
              Réduire les émissions de gaz à effet de serre pour limiter le réchauffement des eaux de surface et protéger
              les écosystèmes marins.
            </p>
          </div>
        </div>
      </div>

      {/* Bouton Play */}
      <Link href="/head/miniGame" className="btn bg-green-500 text-white hover:bg-green-600 mt-4">
        Play
      </Link>
    </div>
  );
}