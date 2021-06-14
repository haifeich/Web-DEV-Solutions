import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}
const books: string[] = [
  "Anna Karenina",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "One Hundred Years of Solitude",
  "A Passage to India",
  "Invisible Man",
  "Don Quixote",
  "Beloved",
  "Mrs. Dalloway",
  "Things Fall Apart",
  "Jane Eyre",
  "The Color Purple",
];

const getRandomBook = (array: string[]): string => {
  const number = Math.floor(Math.random() * array.length);
  return array[number];
};
const getRandomColor = (): string => {
  const keys = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += keys[Math.round(Math.random() * 15)];
  }
  return color;
};
const App = () => {
  const [book, setBook] = React.useState("");
  const [color, setColor] = React.useState("#fff");
  return (
    <>
      <p
        style={{
          backgroundColor: color,
        }}
      >
        {book}
      </p>
      <button
        onClick={() => {
          setColor(getRandomColor());
          setBook(getRandomBook(books));
        }}
      >
        Random Book
      </button>
    </>
  );
};

ReactDOM.render(<App />, appDiv);
