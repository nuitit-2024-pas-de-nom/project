"use client"

interface HeaderProps {
    title?: string;
}

export default function Header(headerProps: HeaderProps) {
    return (
        <header className="bg-primary-500 text-primary-50">
            <h1>Titre</h1>
        </header>
    )

}