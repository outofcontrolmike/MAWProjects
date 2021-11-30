import BrewMenu from "../../../components/brewereyFetch/BrewMenu";
// import BrewModal from "../../../components/brewereyFetch/BrewModal";
import BrewFooter from "../../../components/brewereyFetch/BrewFooter";
export default function Brewery() {
  return (
    <body id="brewBody"
      className="ui segment"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <BrewMenu />
      <div id="breweries" className="ui" style={{ marginTop: "50px" }}></div>
      <BrewFooter />
      {/* Brew Modal */}
    </body>
  );
}
