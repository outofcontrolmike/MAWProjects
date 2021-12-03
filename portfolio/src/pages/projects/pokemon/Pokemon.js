import react from "react";
import PokemonMenu from "../../../components/pokemon/PokemonMenu";

export default function Pokemon() {
  return (
    <div id="pBackground">
      <PokemonMenu />
      <div
        className="row text-center justify-content-center"
        id="pokeTest"
      ></div>
    </div>
  );
}
