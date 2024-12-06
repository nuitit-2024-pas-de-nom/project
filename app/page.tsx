"use client";


import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home() {
    return (
        <div style={{
            userSelect: 'none',
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(0, #004483, #88E6E3)',
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <TitleGame/>
            <PlayButton />
        </div>
    );
}

function TitleGame() {
    let [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    return (
        <h1 style={{
            opacity: 0,
            animation: '1s ease-out 0.5s forwards fadeInTop',
            transitionDuration: '1.5s',
            color: 'white',
            marginTop: '15%',
            fontSize: '64px',
            fontFamily: '"Frijole", sans-serif',
            textShadow: '0 0 2px black',
            textDecoration: 'underline',
            textUnderlineOffset: '12px'
        }}>
            Sauvez Billy
        </h1>
    )
}

function PlayButton() {
    let [hover, setHover] = useState(false);

    let handleHover = () => {
        setHover(!hover);
    }

    return (
        <Link href={"/show-billy"} onMouseEnter={handleHover} onMouseLeave={handleHover} style={{
            opacity: 0,
            marginTop: '64px',
            animation: '1s ease-out 1s forwards fadeInTop',
            transitionDuration: '0.05s',
            background: hover ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.3)',
            padding: '8px 64px',
            borderRadius: '16px',
            fontSize: '24px',
            color: 'white'
        }}>
            Jouer
        </Link>
    )
}