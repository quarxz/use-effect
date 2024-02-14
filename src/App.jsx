import { useEffect, useState } from "react";

import { Card } from "./components/Card";

import "./App.css";
import axios from "axios";
import { ImageCard } from "./components/ImageCard";

function App() {
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const [selectedISBN, setSelectedISBN] = useState(null);

  async function loadData() {
    console.log("loading Data");
  }
  // loadData();

  // initial Load
  // leeres dependency Array -> soll nur beim ersten Start ausgeführt
  // useEffect(() => {
  //   loadData();
  // }, []);

  useEffect(() => {
    async function loadData() {
      console.log("load Data");
      try {
        setIsloading(true);
        const response = await axios.get(
          "https://openlibrary.org/search.json?title=asterix"
        );

        console.log(response.data);
        setBooks(response.data.docs);
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setIsloading(false);
      }
    }
    loadData();
  }, []);

  if (isError) {
    return (
      <>
        <h1>Componet Livecycle</h1>
        <p>oops - an error appeared!</p>
      </>
    );
  }
  return (
    <>
      <h1>Componant Livescycle</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      {isCardVisible ? <Card text={count} title={" #1"} /> : undefined}
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setIsCardVisible((prev) => !prev);
        }}
      >
        Toggle Card
      </button>

      <div className="main-Container">
        {isloading ? (
          <p>Lade Daten...</p>
        ) : (
          <ul>
            {books.map((book) => {
              return (
                <li
                  onClick={() => {
                    setSelectedISBN(book.isbn[0]);
                    console.log(selectedISBN);
                  }}
                  key={book.key}
                >
                  {book.title}
                </li>
              );
            })}
          </ul>
        )}
        <ImageCard isbn={selectedISBN} />
      </div>
    </>
  );
}

export default App;
