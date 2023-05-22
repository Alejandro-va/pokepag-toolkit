import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../feactures/pokemon/pokemonSlice";
import "./Cards.scss";

const Cards = () => {
  //const [pokemon, setPokemon] = useState([]);
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonStore.pokemonState);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className="container-card">
      {pokemon.map((el) => {
        return (
          <div
            style={{
              width: "18rem",
            }}
            className="card-item"
            key={el.id}
          >
            <Link to={`/detailPoke/${el.id}`}>
              <div className="card-top">
                <img src={el.urlImg} />
              </div>
              <div className="card-info">
                <h1>{el.name}</h1>
                <p>Specie: {el.species}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

/*    return (
     <>
       {pokemon.map((el) => {
         return (
           <Card
             style={{
               width: "18rem",
             }}
             key={el.id}
           >
             <Link to={`/detailPoke/${el.id}`}>
               <Card.Header className="text-center">
                 <h1> {el.name}</h1>
               </Card.Header>
               <Card.Img variant="top" src={el.urlImg} />
               <Card.Body>
                 <Card.Title style={{ alignSelf: "flex-end" }}>
                   Specie: {el.species}
                 </Card.Title>
                 <Card.Text></Card.Text>
               </Card.Body>
             </Link>
           </Card>
         );
       })}
     </>
   ); */
