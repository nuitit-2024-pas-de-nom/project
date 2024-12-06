"use client";

import { router } from "next/client";
import Link from "next/link";

interface HeaderProps {
  title?: string;
}

export default function Header(headerProps: HeaderProps) {
  return (
    <header className="bg-primary-500 text-primary-50">
      <h1>
        <Link href="/">
          {headerProps.title ? headerProps.title : "Sauvez Billy"}
        </Link>
      </h1>
      <nav>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
          <li className="menu-title">Défis</li>
          <li id={"1"}>
            <Link href="/grinch">🎁 Le calendrier du Grinch</Link>
          </li>
          <li id={"2"}>
            <Link href="/chaos">🥰 Bad UI</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
