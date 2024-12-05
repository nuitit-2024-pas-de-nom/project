// "use client";

import Image from "next/image";
import styles from "./input.module.css";

import inputImage from "/public/input.png";

interface InputProps {
  width: string | number;
  height: string | number;
}

export default function Input({ width, height }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <Image
        src={inputImage}
        alt="inputImage"
        layout="fill"
        objectFit="cover"
      />
      <input
        className={styles.input}
        style={{ width: width, height: height }}
      ></input>
    </div>
  );
}
