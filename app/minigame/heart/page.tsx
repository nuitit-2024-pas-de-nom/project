"use client";

import {useEffect, useState} from "react";

// @ts-ignore
export default function MiniGame( children : any) {

    let [founded, setFounded] = useState(0);
    let amount = 5;

    let style = {
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url("/images/bg-base.png")',
        backgroundSize: '100% auto'
    };

    let onRemove = () => {
        amount--;
        setFounded(founded + 1);
    };

    let elements = [];
    for (let i = 0; i < amount; i++) {
        elements.push(<Object key={i} onRemove={onRemove} />);
    }

    return (
        <>
            <div style={style}>
                <h1 style={{ paddingTop: '32px', marginTop: '0', textAlign: 'center' }}>{founded}/5</h1>
                {elements}
                {children}
            </div>
        </>
    );
}

export function Object({ onRemove }) {
    let [window, setWindow] = useState(null);



    let [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindow(window);
        });

        return () => {
            window.removeEventListener('resize', () => {
                setWindow(window);
            });
        };

    });

    let handleClick = () => {
        setVisible(false);
        onRemove();
    };

    let height = window.innerHeight;
    let left = Math.floor(Math.random() * (window.innerWidth - 48));
    let top = height / 2 + Math.floor(Math.random() * ((height / 2) - 48));
    let style = {
        width: '48px',
        position: 'absolute',
        left: left + 'px',
        top: top + 'px'
    };

    // @ts-ignore
    return <img alt="obj"
                src={"/images/button.png"}
                style={style}
                onClick={handleClick}
                hidden={!visible}
    />;
}