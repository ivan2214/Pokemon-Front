import React from "react";
import { Link } from "react-router-dom";
import "./CardPokemon.css";

const CardPokemon = ({ name, image, types, pokeId }) => {
  let nameType = typeof types[0] === "object" ? types[0].name : types[0];

  return (
    <>
      <article key={pokeId} className={`${nameType} containerCard`}>
        <Link className="contCard" to={`/pokemons/${pokeId}`}>
          <h2 className="name">{name}</h2>
          <picture className="card-img-container">
            <img
              loading="lazi"
              src={image ? image : "NOCUENTA CCON IMAGEN"}
              alt="NOCUENTA CCON IMAGEN"
              className="img"
            />
          </picture>
          <div className="types">
            {types?.map((t, i) => {
              return (
                <p
                  key={i}
                  className={`parrafoType ${
                    typeof types[0] === "object" ? t.name : t
                  } `}
                >
                  {typeof types[0] === "object" ? t.name : t}
                </p>
              );
            })}
          </div>
        </Link>
      </article>
    </>
  );
};

export default CardPokemon;
