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
      setTrainProgress((prev) => Math.min(prev + 1, 30)); // Le train s'étend jusqu'à 50% de la largeur de l'écran
    }, 20);

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
          backgroundImage: "url('/monde.png')",
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
          <>
            <div
              style={{
                position: "absolute",
                top: `${todayDish.coordinates.y}%`,
                left: `${todayDish.coordinates.x}%`,
                width: `${trainProgress}vw`,
                height: "5px",
                background:
                  "linear-gradient(to right, #f6d365, #fda085, #fbc2eb, #a18cd1)",
                borderRadius: "3px",
                boxShadow: "0 0 10px rgba(255, 138, 0, 0.5)",
                transformOrigin: "left center",
                transition: "width 0.1s ease-out",
              }}
            />
            {/* Encart au bout du train */}
            {trainProgress === 30 && (
              <div
                style={{
                  position: "absolute",
                  top: `${todayDish.coordinates.y}%`,
                  left: `calc(${todayDish.coordinates.x}% + ${trainProgress}vw)`,
                  transform: "translate(-50%, -50%)",
                  width: "300px",
                  padding: "15px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  animation: "fadeIn 0.5s ease-in-out",
                }}
              >
                <img
                  src={todayDish.image}
                  alt={todayDish.dish}
                  style={{
                    width: "100%",
                    height: "150px",
                    borderRadius: "8px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h2 style={{ color: "#f77f00", margin: "5px 0" }}>
                  {todayDish.dish}
                </h2>
                <p style={{ fontSize: "12px", margin: "5px 0" }}>
                  Origine : <strong>{todayDish.country}</strong>
                </p>
                <p style={{ fontSize: "12px", color: "#555" }}>
                  {todayDish.description}
                </p>
              </div>
            )}
          </>
        )}
      </div>

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
      `}</style>
    </div>
  );
};

export default TestPage;
