"use client"

import {router} from "next/client";

interface HeaderProps {
    title?: string;
}

export default function Header(headerProps: HeaderProps) {
    return (
        <header className="bg-primary-500 text-primary-50">
            <h1>{headerProps.title}</h1>
        </header>
    )

}