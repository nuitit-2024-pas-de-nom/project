"use client";
import { useEffect, useState } from "react";
import "./styles.css";
import Link from "next/link";

interface CardProps {
    title: string;
    diagnosis: string;
    solutions: string;
    position: string;
}

export default function Card(props: CardProps) {
    const [text, setText] = useState(props.diagnosis);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isFlipped) {
                setText(props.solutions);
            } else {
                setText(props.diagnosis);
            }
        }, 1000); // délai de 1 seconde

        return () => clearTimeout(timeout);
    }, [isFlipped]);

    function changeText() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
            <div className="card-inner">
                <div className="card-front card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.diagnosis}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={changeText}>Flip</button>
                    </div>
                </div>
                <div className="card-back card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.solutions}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary" onClick={changeText}>Flip</button>
                        <Link className="btn btn-primary" href={`/minigame/${props.position}`}>Go to Game</Link>
                    </div>
                </div>
            </div>

        </div>
    );
}