"use client";
import { useState, useEffect } from "react";

const TestPage = () => {
  const today = new Date().toISOString().split("T")[0];
  const data = {
    "2024-12-05": {
      country: "France",
      dish: "Cassoulet",
      description:
        "Un ragoût riche à base de haricots blancs, de saucisses et de viande.",
      image:
        "https://static.750g.com/images/360-240/0ed2e88c83811daea7c60e278de11b08/adobestock-28409562.jpeg",
      coordinates: { x: 50, y: 60 }, // Position en % (x: gauche, y: haut)
    },
    "2024-12-06": {
      country: "Italie",
      dish: "Risotto alla Milanese",
      description:
        "Un risotto crémeux parfumé au safran, souvent servi avec de l'osso buco.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Risotto_giallo_su_sfondo_nero.jpg",
      coordinates: { x: 70, y: 40 },
    },
  };

  const [todayDish, setTodayDish] = useState(null);
  const [trainProgress, setTrainProgress] = useState(0);

  useEffect(() => {
    setTodayDish(data[today]);

    // Animation du train
    const interval = setInterval(() => {
      setTrainProgress((prev) => Math.min(prev + 2, 100));
    }, 30);

    return () => clearInterval(interval);
  }, [today]);

  if (!todayDish) {
    return <p>Aucun plat disponible pour aujourd'hui.</p>;
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Plat national pour Noël le {today}
      </h1>

      {/* Carte du monde */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          margin: "0 auto",
          backgroundImage:
            // fichier public monde.png
            "url('/monde.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "2px solid #ccc",
          borderRadius: "8px",
        }}
      >
        {/* Pointeur initial */}
        <div
          style={{
            position: "absolute",
            top: `${todayDish.coordinates.y}%`,
            left: `${todayDish.coordinates.x}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              backgroundColor: "crimson",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            📍
          </div>
        </div>

        {/* Train animé */}
        {trainProgress > 0 && (
          <div
            style={{
              position: "absolute",
              top: `${todayDish.coordinates.y}%`,
              left: `${todayDish.coordinates.x}%`,
              width: `${Math.min(trainProgress, 100)}vw`,
              height: "5px",
              background:
                "linear-gradient(to right, #f6d365, #fda085, #fbc2eb, #a18cd1)",
              borderRadius: "3px",
              boxShadow: "0 0 10px rgba(255, 138, 0, 0.5)",
              transformOrigin: "left center",
              transition: "width 0.1s ease-out",
            }}
          />
        )}
      </div>

      {/* Détails une fois le train terminé */}
      {trainProgress === 100 && (
        <div
          style={{
            position: "relative",
            marginTop: "20px",
            textAlign: "center",
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          <img
            src={todayDish.image}
            alt={todayDish.dish}
            style={{
              width: "300px",
              height: "200px",
              borderRadius: "8px",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />
          <h2 style={{ color: "#f77f00" }}>{todayDish.dish}</h2>
          <p>
            Origine : <strong>{todayDish.country}</strong>
          </p>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>
            {todayDish.description}
          </p>

          {/* Confettis */}
          <div className="confetti-container">
            {Array.from({ length: 50 }).map((_, index) => (
              <div key={index} className="confetti" />
            ))}
          </div>
        </div>
      )}

      {/* Styles pour animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .confetti-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          pointer-events: none;
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          background: random-color();
          opacity: 0.8;
          top: -10px;
          animation: fall 3s linear infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(200vh) rotate(720deg);
            opacity: 0;
          }
        }

        .confetti:nth-child(odd) {
          background-color: #ff85b3;
        }

        .confetti:nth-child(even) {
          background-color: #82b1ff;
        }
      `}</style>
    </div>
  );
};

export default TestPage;
