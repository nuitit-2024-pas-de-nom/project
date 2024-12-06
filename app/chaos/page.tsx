"use client";

import Image from "next/image";
import styles from "./page.module.css";

import submitButtonImage from "/public/submit_button.png";
import buttonImage from "/public/button.png";
import phoneImage from "/public/icon_phone.png";
import userImage from "/public/icon_user.png";
import addressImage from "/public/icon_house.png";
import emailImage from "/public/icon_chat.png";

import Input from "./Input";
import { useState } from "react";

export default function Chaos() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setValidated(!validated);
  };
  return (
    <div className={`${styles.Container} ${styles.BarrioRegular}`}>
      <h1 className={styles.Heading}>Formulaire de contact :</h1>
      <form>
        {/* First Name Field */}
        <div className={`${styles.FormGroup} ${styles.LabelRight}`}>
          <div className={styles.IconImage}>
            <Image src={userImage} alt="userImage" layout="fill" />
          </div>
          <label htmlFor="first-name" className={styles.Label}>
            Prénom :
          </label>

          <Input
            width={"200px"}
            height={"30px"}
            placeholder="Premier nom"
            className={styles.InputField}
          ></Input>
        </div>

        {/* Last Name Field */}
        <div className={`${styles.FormGroup} ${styles.LabelLeft}`}>
          <div className={styles.IconImage}>
            <Image src={userImage} alt="userImage" layout="fill" />
          </div>
          <label htmlFor="last-name" className={styles.Label}>
            Nom :
          </label>

          <div className={styles.ScrollInput}>
            <Input
              width={"500px"}
              height={"50px"}
              placeholder="Dernier nom"
              className={styles.InputField}
            ></Input>
          </div>
        </div>

        {/* Email Field */}
        <div className={`${styles.FormGroup} ${styles.LabelRight}`}>
          <div className={styles.IconImage}>
            <Image src={emailImage} alt="emailImage" layout="fill" />
          </div>
          <label htmlFor="email" className={styles.Label}>
            Adresse électronique :
          </label>

          <Input
            width={"250px"}
            height={"100px"}
            placeholder="Adresse de courrier électronique"
            className={styles.InputField}
          ></Input>
        </div>

        {validated && (
          <div className={styles.Error}>
            <h2>Désolé, nous n&apos;avons pas pu traiter votre demande 🗿</h2>

            <div>
              <div className={styles.ImageContainer}>
                <Image src={submitButtonImage} alt="resetImage" layout="fill" />
                <button
                  type="submit"
                  className={styles.SubmitButton}
                  onClick={handleSubmit}
                >
                  Réunitialiser
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Phone Field */}
        <div className={`${styles.FormGroup} ${styles.LabelLeft}`}>
          <div className={styles.IconImage}>
            <Image src={phoneImage} alt="phoneImage" layout="fill" />
          </div>
          <label htmlFor="phone" className={styles.Label}>
            Numéro de téléphone
          </label>

          {[...Array(10).keys()].map((i) => (
            <div key={i}>
              <Input
                image={buttonImage}
                width={"50px"}
                height={"25px"}
                placeholder={i.toString()}
                className={styles.InputField}
              ></Input>
            </div>
          ))}
        </div>

        {/* Address Field */}
        <div className={`${styles.FormGroup} ${styles.LabelRight}`}>
          <div className={styles.IconImage}>
            <Image src={addressImage} alt="addressImage" layout="fill" />
          </div>
          <label htmlFor="address" className={styles.Label}>
            Adresse postale :
          </label>

          <div className={styles.ScrollInput}>
            <Input
              width={"250px"}
              height={"50px"}
              placeholder="Adresse"
              className={styles.InputField}
            ></Input>
          </div>
        </div>

        {!validated && (
          <>
            {/* Submit Button */}
            <div className={styles.SubmitButtonWrapperWrapper}>
              <div className={styles.SubmitButtonWrapper}>
                <div className={styles.ImageContainer}>
                  <Image
                    src={submitButtonImage}
                    alt="submitImage"
                    layout="fill"
                  />
                  <button
                    type="submit"
                    className={styles.SubmitButton}
                    onClick={handleSubmit}
                  >
                    Soumettre les informations
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
