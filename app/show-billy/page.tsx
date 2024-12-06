"use client";

import Link from "next/link";
import BillySrc from "@/assets/img/billy/default.png";
import {healthProblems} from "@/data/health-problems";
import Image from "next/image";
import {useState} from "react";


export default function show() {
    return (
        <div style={{
            background: 'linear-gradient(0, #004483, #88E6E3)',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <BillyView/>
        </div>
    )
}

function BillyView() {


    return (
        <>
            <Image alt={"billy"} src={BillySrc} style={{
                width: '300px'
            }}/>
            {
                healthProblems.map((problem) => (
                    <Organ key={problem.position} problem={problem}/>
                ))
            }
        </>
    )
}

function Organ({problem, width = 64, borderRadius = 128}) {
    let [hover, setHover] = useState(false);

    let handleHover = () => {
        setHover(!hover);
    }

    return (
        <Link href={'/' + problem.endpoint} onMouseEnter={handleHover} onMouseLeave={handleHover} style={{
            position: "absolute",
            width: (hover ? width * 1.4 : width) + 'px',
            height: (hover ? problem.height * 1.4 : problem.height) + 'px',
            borderRadius: borderRadius,
            background: 'rgba(255,202,202,0.7)',
            margin: problem.margin,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            {hover ?
                <Image src={problem.image} alt="heart" style={{
                    width: "64px"
                }}/> : <></>
            }
        </Link>
    )
}

function A() {
    return (
        <>
            {healthProblems.map((problem) => (
                <div key={problem.position}>
                    <Link href={`/${problem.endpoint}`} className="btn btn-primary">
                        {problem.title}
                    </Link>
                </div>
            ))}
        </>
    )
}