import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Detail.scss";

const Detail = (pok) => {
  const { id } = useParams();
  console.log(typeof id);

  const selectorPokemon = useSelector(
    (state) => state.pokemonStore.pokemonState
  );
  //console.log(selectorPokemon);
  const pokemon = selectorPokemon.find((pok) => pok.id === parseInt(id));
  console.log(pokemon);

  return (
    <div className="poke-section">
      {!pokemon ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="poke-title">{pokemon.name}</div>

            <div className="poke-info">
              <div>
                <span>Species</span>
                <span>{pokemon.species}</span>
              </div>
              <div>
                <span>hp</span>
                <span>{}</span>
              </div>
              <div>
                <span>attack</span>
                <span>{}</span>
              </div>
              <div>
                <span>defense</span>
                <span>{}</span>
              </div>
              <div>
                <span>special-attack</span>
                <span>{}</span>
              </div>
              <div>
                <span>special-defense</span>
                <span>{}</span>
              </div>
              <div>
                <span>speed</span>
                <span>{}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={pokemon.urlImg} alt={pokemon.name} />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;

/* 
 {pokemon && (
        <Card style={{ width: "18rem" }}>
          <Card.Header className="text-center">
            <h1> {pokemon.name}</h1>
          </Card.Header>
          <Card.Img variant="top" src={pokemon.urlImg} />
          <Card.Body variant="bottom">
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>
              Weight: {pokemon.weight} kg
              <br />
              Height: {pokemon.height} m
            </Card.Text>
          </Card.Body>
        </Card>
      )}
*/
