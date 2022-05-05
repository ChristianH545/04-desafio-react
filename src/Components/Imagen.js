import React from "react";

const Imagen = (character) => {
  console.log(character);
  return (
    <>
      <div className="card">
        <div className="carousel-item active">
          <img
            src={character.image}
            className="d-block w-100"
            alt={character.id}
          />
        </div>
      </div>
    </>
  );
};

export default Imagen;
