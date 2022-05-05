import React, { useState, useEffect } from "react";
import Imagen from "./Imagen";
import { Carousel } from "react-bootstrap";

const Carousels = () => {
  //VARIABLE

  const url = "https://rickandmortyapi.com/api/character";

  console.log(url);

  // Hooks
  const [characters, setCharacters] = useState([]);

  //PROMESA

  const getData = async () => {
    try {
      const data = await fetch(url);
      const character = await data.json();
      setCharacters(character.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(characters);
  return (
    <>
      <Carousel className="carousel">
        {characters.map((character) => (
          <Carousel.Item>
            <Imagen key={character.id} {...character} />

            <Carousel.Caption>
              <h3 className="nombre-personaje">{character.name}</h3>
              <p className="parrafo-especie">{character.species}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Carousels;
