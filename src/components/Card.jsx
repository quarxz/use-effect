import { useEffect, useState } from "react";
import styles from "./Card.module.css";
export function Card({ title, text }) {
  console.log("Card will render with title =", title);

  // wird aufgerufen wenn die Componente initialisiert wird
  //   useEffect(() => {
  //     console.log("Card mounted");
  //   }, []);

  // wird immer aufgerufen wenn sich die prop title ändert
  //   useEffect(() => {
  //     console.log("Title Changed");
  //   }, [title]);

  // wird ausgeführt wenn Componente aus dem Dom verschwindet
  //   useEffect(() => {
  //     // clean up function
  //     // wird ausgeführt bevor die Componente
  //     // aus dem Dom verschwindet
  //     return () => {
  //       console.log("Card unmounted");
  //     };
  //   }, []);

  return (
    <div className={styles.card}>
      <h2>Card {title}</h2>
      <p>{text}</p>
    </div>
  );
}
