"use client";
"use client"; // Obligatoire pour utiliser React avec des hooks et Leaflet

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

const MapPage = () => {
  const today = new Date().toISOString().split("T")[0];
  const data: Record<
    string,
    { country: string; dish: string; coordinates: [number, number] }
  > = {
    "2024-12-05": {
      country: "France",
      dish: "Cassoulet",
      coordinates: [46.603354, 1.888334],
    },
    "2024-12-06": {
      country: "Italie",
      dish: "Risotto alla Milanese",
      coordinates: [41.87194, 12.56738],
    },
  };

  const [todayDish, setTodayDish] = useState(null);

  useEffect(() => {
    setTodayDish(data[today]);
  }, [today]);

  if (!todayDish) {
    return <p>Aucun plat disponible pour aujourd'hui.</p>;
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Plat national pour le {today}
      </h1>
      <MapContainer
        center={todayDish.coordinates}
        zoom={5}
        style={{ height: "80%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={todayDish.coordinates}>
          <Popup>
            <h3>{todayDish.dish}</h3>
            <p>{todayDish.country}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapPage;
