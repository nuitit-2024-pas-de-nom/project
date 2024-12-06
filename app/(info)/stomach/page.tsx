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

      <h1 className="text-2xl font-bold mt-4">Acidification</h1>

      <div
        className={`flip-card w-64 h-64 mt-6 ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front bg-blue-500 text-white p-4 rounded shadow flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">Impact de l'acidification</h2>
            <p>
              L'acidification réduit le pH des océans, fragilise les récifs coralliens et limite leur capacité à capturer
              le carbone.
            </p>
            <p className="text-gray-500">(Cliquer pour révéler)</p>
          </div>
          <div className="flip-card-back bg-green-500 text-white p-4 rounded shadow flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">Solutions</h2>
            <p>
              Limiter les émissions de CO2, promouvoir les énergies renouvelables et protéger les écosystèmes marins
              pour ralentir ce phénomène.
            </p>
          </div>
        </div>
      </div>

      <Link href="/stomach/miniGame" className="btn bg-green-500 text-white hover:bg-green-600 mt-4">
        Play
      </Link>
    </div>
  );
}