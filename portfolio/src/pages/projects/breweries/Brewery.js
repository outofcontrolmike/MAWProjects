import BrewMenu from "../../../components/brewereyFetch/BrewMenu";
import BrewModal from "../../../components/brewereyFetch/BrewModal";
export default function Brewery() {



    return (
        <body className="ui segment" style={{ backgroundColor: "black", height: "100vh" }}>
            <BrewMenu />
            <div id="breweries" className="ui" style={{ marginTop: "50px" }}></div>
            {/* Brew Modal */}
            <BrewModal />

        </body>
    );
}
