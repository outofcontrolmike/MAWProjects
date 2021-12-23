import PokemonMenu from "../../../components/pokemon/PokemonMenu";

//Main component for pokemon app Mainly inludes Menu and the empty list for where pokemon are printed out
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
