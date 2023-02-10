import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Dictionary from "./Dictionary";

export default function Definition() {
  const [word, setWord] = useState([]);
  console.log(useParams());
  let { search } = useParams();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);
  return (
    <>
      <Dictionary />
      <h1>
        Here is a definition for{" "}
        <span className="italic font-bold">{search}</span>:
      </h1>
      {word.map((meaning, id) => {
        return (
          <p key={uuid()}>
            <span className="font-bold">{meaning.partOfSpeech}:</span>{" "}
            {meaning.definitions[0].definition}
          </p>
        );
      })}
    </>
  );
}
