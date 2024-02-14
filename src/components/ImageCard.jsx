import { useEffect, useState } from "react";
import axios from "axios";

export function ImageCard({ isbn }) {
  const [book, setBook] = useState(null);
  useEffect(() => {
    async function loadBook() {
      const res = await axios.get(
        "https://openlibrary.org/search.json?isbn=" + isbn
      );
      console.log(res.data);
      setBook(res.data.docs[0]);
    }
    if (isbn) {
      loadBook();
    } else {
      setBook(null);
    }
  }, [isbn]);
  return (
    <div>
      <p>{isbn}</p>
      <img src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`} />
      <p>{book ? book.title : ""}</p>
      <p>{book ? book.first_publish_year : ""}</p>
    </div>
  );
}
