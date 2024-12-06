// "use client";

import Image, { StaticImageData } from "next/image";
import styles from "./input.module.css";

import inputImage from "/public/input.png";

interface InputProps {
  image?: StaticImageData;
  width: string | number;
  height: string | number;
  placeholder: string;
  className?: string;
}

export default function Input({
  image,
  width,
  height,
  placeholder,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <Image
        src={image ? image : inputImage}
        alt="inputImage"
        layout="fill"
        objectFit="cover"
      />
      <input
        className={styles.input}
        style={{ width: width, height: height }}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
