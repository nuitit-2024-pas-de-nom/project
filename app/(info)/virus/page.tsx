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

      <h1 className="text-2xl font-bold mt-4">Pollution des eaux</h1>

      <div
        className={`flip-card w-64 h-64 mt-6 ${isFlipped ? "flipped" : ""}`} // w-64 pour réduire la largeur
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flip-card-inner">
          {/* Face avant */}
          <div className="flip-card-front bg-blue-500 text-white p-4 rounded shadow flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">Impact de la pollution plastique</h2>
            <p>
              La pollution plastique affecte gravement la faune et la flore marines, altérant les écosystèmes et les
              chaînes alimentaires.
            </p>
          </div>

          {/* Face arrière */}
          <div className="flip-card-back bg-green-500 text-white p-4 rounded shadow flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">Solutions pour réduire la pollution</h2>
            <p>
              Encourager les matériaux biodégradables, organiser des nettoyages des plages, et interdire les plastiques
              à usage unique.
            </p>
          </div>
        </div>
      </div>

      <Link href="/virus/miniGame" className="btn bg-green-500 text-white hover:bg-green-600 mt-4">
        Play
      </Link>
    </div>
  );
}