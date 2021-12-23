import BrewMenu from "../../../components/brewereyFetch/BrewMenu";
import BrewFooter from "../../../components/brewereyFetch/BrewFooter";

//Main component to render for Brewery App
export default function Brewery() {
  return (
    <body id="brewBody"
      className="ui segment"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <BrewMenu />
      <div id="breweries" className="ui" style={{ marginTop: "50px" }}></div>
      <BrewFooter />
    </body>
  );
}
