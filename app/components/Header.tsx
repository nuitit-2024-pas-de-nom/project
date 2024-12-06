"use client";

import { router } from "next/client";
import Link from "next/link";
import {metadata} from "@/app/layout";

interface HeaderProps {
  title?: string;
}

export default function Header(headerProps: HeaderProps) {
    return (
    <div className="navbar bg-primary-500 text-primary-50 w-screen">
      {/*<h1 className={"h-10 flex justify-center items-center  w-screen font-bold size-3"}>*/}
      {/*  <Link href="/">*/}
      {/*    {headerProps.title ? headerProps.title : "Sauvez Billy"}*/}
      {/*  </Link>*/}
      {/*</h1>*/}
      <div>
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box w-screen">
              <li id={"0"} className={""}>
                  <Link href={"/"}>🌊 Home</Link>
              </li>
              <li className="menu-title">Défis</li>

              <li id={"1"}>
                  <Link href="/grinch">🎁 Le calendrier du Grinch</Link>
              </li>
              <li id={"2"}>
                  <Link href="/chaos">🥰 Bad UI</Link>
              </li>
              <li id={"3"} className="ml-auto w-100">
                  <label className="flex cursor-pointer gap-2">
                      <span className="label-text">Business</span>
                      <input type="checkbox" value="autumn" className="toggle theme-controller"/>
                      <span className="label-text">Autumn</span>
                  </label>
              </li>
          </ul>
      </div>
    </div>
    );
}
