import PokemonMenu from "../../../components/pokemon/PokemonMenu";

//Main component for pokemon app Mainly includes Menu and the empty list for where pokemon are printed out
export default function Pokemon() {
  document.title = "Pokemon Fetch";

  return (
    <div id="pBackground">
      <PokemonMenu />
      <div id="pokeTestWrapper">
        <div
          className="row text-center justify-content-center"
          id="pokeTest"
        ></div>
      </div>
    </div>
  );
}
