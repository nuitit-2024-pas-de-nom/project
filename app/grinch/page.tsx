"use client";
import { useState, useEffect } from "react";
interface Dish {
  country: string;
  dish: string;
  description: string;
  image: string;
  coordinates: { x: number; y: number };
}

type Data = Record<string, Dish>;

const TestPage = () => {
  const today = new Date().toISOString().split("T")[0];
  const data: Data = {
    "2024-12-06": {
      country: "France",
      dish: "Dinde aux marrons",
      description:
        "Un classique de Noël en France, souvent accompagné de légumes d'hiver.",
      image: "https://assets.afcdn.com/recipe/20181109/83747_w600.jpg",
      coordinates: { x: 48, y: 35 },
    },
    "2024-12-07": {
      country: "Whoville",
      dish: "Le Grinch",
      description:
        "Oh oh oh ! Le Grinch est là pour vous gâcher Noël avec un peu d'humour.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 50, y: 50 },
    },
    "2024-12-25": {
      country: "Italie",
      dish: "Panettone",
      description:
        "Un gâteau de Noël traditionnel avec des fruits confits et des raisins secs.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Panettone_-_Nicolettone_2017_-_IMG_7092_%2831752504105%29.jpg/1200px-Panettone_-_Nicolettone_2017_-_IMG_7092_%2831752504105%29.jpg",
      coordinates: { x: 50, y: 40 },
    },
    "2024-12-08": {
      country: "Germany",
      dish: "Stollen",
      description:
        "Un pain aux fruits riche saupoudré de sucre glace, une tradition allemande.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Panettone_-_Nicolettone_2017_-_IMG_7092_%2831752504105%29.jpg/1200px-Panettone_-_Nicolettone_2017_-_IMG_7092_%2831752504105%29.jpg",
      coordinates: { x: 50, y: 33 },
    },
    "2024-12-05": {
      country: "Japan",
      dish: "Christmas Cake",
      description:
        "Un gâteau léger garni de crème fouettée et de fraises, populaire au Japon.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 83, y: 42 },
    },
    "2024-12-10": {
      country: "Mexico",
      dish: "Tamales",
      description:
        "Pâte de maïs cuite à la vapeur, garnie de viande, un délice mexicain.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 40, y: 70 },
    },
    "2024-12-11": {
      country: "Sweden",
      dish: "Julbord",
      description:
        "Un buffet de Noël suédois avec hareng mariné, boulettes de viande et plus.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 65, y: 35 },
    },
    "2024-12-12": {
      country: "Australia",
      dish: "Pavlova",
      description:
        "Un dessert à base de meringue garni de fruits frais, un classique australien.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 30, y: 90 },
    },
    "2024-12-13": {
      country: "Russia",
      dish: "Kutya",
      description:
        "Une bouillie de blé sucrée avec du miel et des graines de pavot.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 75, y: 30 },
    },
    "2024-12-14": {
      country: "United Kingdom",
      dish: "Christmas Pudding",
      description:
        "Un dessert dense aux fruits secs, flambé au brandy avant d'être servi.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 55, y: 40 },
    },
    "2024-12-15": {
      country: "Poland",
      dish: "Pierogi",
      description:
        "Des raviolis farcis de choucroute, pommes de terre ou fromage, un régal polonais.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 65, y: 45 },
    },
    "2024-12-16": {
      country: "Finland",
      dish: "Joulutorttu",
      description:
        "Des pâtisseries en forme d'étoile garnies de confiture de prune, un classique finlandais.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 60, y: 35 },
    },
    "2024-12-17": {
      country: "Brazil",
      dish: "Pernil",
      description:
        "Une épaule de porc rôtie aux épices, souvent servie avec du riz et des légumes.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 30, y: 70 },
    },
    "2024-12-18": {
      country: "Norway",
      dish: "Ribbe",
      description:
        "Poitrine de porc croustillante, un incontournable du dîner de Noël norvégien.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 55, y: 30 },
    },
    "2024-12-19": {
      country: "Philippines",
      dish: "Bibingka",
      description:
        "Un gâteau de riz cuit dans des feuilles de bananier, sucré et moelleux.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 80, y: 70 },
    },
    "2024-12-20": {
      country: "South Africa",
      dish: "Malva Pudding",
      description:
        "Un pudding sucré et spongieux souvent servi avec une crème anglaise.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 20, y: 85 },
    },
    "2024-12-21": {
      country: "Canada",
      dish: "Tourtière",
      description:
        "Une tarte de viande épicée, une tradition des fêtes au Québec.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 40, y: 40 },
    },
    "2024-12-22": {
      country: "Greece",
      dish: "Melomakarona",
      description:
        "Des biscuits au miel et aux noix, un délice grec pour Noël.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 70, y: 50 },
    },
    "2024-12-23": {
      country: "Iceland",
      dish: "Hangikjöt",
      description:
        "Agneau fumé servi avec des pommes de terre et des petits pois.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 50, y: 20 },
    },
    "2024-12-24": {
      country: "Austria",
      dish: "Sachertorte",
      description:
        "Un gâteau au chocolat riche garni d'une couche d'abricot, une spécialité autrichienne.",
      image:
        "https://i.pinimg.com/originals/67/ed/62/67ed628059f6f50dcfd29bb2b788224d.gif",
      coordinates: { x: 60, y: 50 },
    },
  };

  const [todayDish, setTodayDish] = useState<Dish | null>(null);
  const [trainProgress, setTrainProgress] = useState(0);

  useEffect(() => {
    setTodayDish(data[today] || null);

    const interval = setInterval(() => {
      setTrainProgress((prev) => Math.min(prev + 1, 30));
    }, 20);

    return () => clearInterval(interval);
  }, [today]);

  if (!todayDish) {
    return <p>Aucun plat disponible pour aujourd&apos;hui.</p>;
  }

  const encartWidth = 300;
  const encartHeight = 200;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const leftPosition =
    todayDish.coordinates.x * (viewportWidth / 100) +
    trainProgress * (viewportWidth / 100);
  const topPosition = todayDish.coordinates.y * (viewportHeight / 100);

  const isTooFarRight = leftPosition + encartWidth / 2 > viewportWidth;
  const isTooFarLeft = leftPosition - encartWidth / 2 < 0;
  const isTooLow = topPosition + encartHeight / 2 > viewportHeight;
  const isTooHigh = topPosition - encartHeight / 2 < 0;

  const adjustedLeft = isTooFarRight
    ? viewportWidth - encartWidth - 10 // 10px de marge
    : isTooFarLeft
    ? 10 // 10px de marge
    : leftPosition - encartWidth / 2;

  const adjustedTop = isTooLow
    ? viewportHeight - encartHeight - 10 // 10px de marge
    : isTooHigh
    ? 10 // 10px de marge
    : topPosition - encartHeight / 2;

  return (
    <div
      style={{
        position: "relative",
        width: "90%",
        height: "100vh",
        margin: "auto",
      }}
    >
      {/* Carte du monde */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          margin: "0 auto",
          backgroundImage: "url('/grinch/monde.jpg')",
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
              backgroundColor: "darkred",
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
            🎄
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
                  "linear-gradient(to right, #ff0000, #ffd700, #ff0000)",
                borderRadius: "3px",
                boxShadow: "0 0 10px rgba(255, 138, 0, 0.5)",
                transformOrigin: "left center",
                transition: "width 0.1s ease-out",
              }}
            />
            {/* Encart au bout du train */}
            {trainProgress === 30 && (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: `${adjustedTop}px`,
                    left: `${adjustedLeft}px`,
                    width: `${encartWidth}px`,
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
                  <h2
                    style={{
                      color: "#ff0000",
                      fontSize: "1.5rem",
                      margin: "5px 0",
                    }}
                  >
                    {todayDish.dish}
                  </h2>
                  <p
                    style={{ fontSize: "12px", margin: "5px 0", color: "#555" }}
                  >
                    Origine : <strong>{todayDish.country}</strong>
                  </p>
                  <p style={{ fontSize: "12px", color: "#555" }}>
                    {todayDish.description}
                  </p>
                </div>
              </>
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
      `}</style>{" "}
    </div>
  );
};

export default TestPage;
