import BrewMenu from "../../../components/brewereyFetch/BrewMenu";
import BrewModal from "../../../components/brewereyFetch/BrewModal";
import $ from 'jquery';

export default function Brewery() {

    console.log('You are running jQuery version: ' + $.fn.jquery)
    return (
        <body className="ui segment" style={{ backgroundColor: "black", height: "100vh" }}>
            <BrewMenu />
            <div id="breweries" className="ui" style={{ marginTop: "50px" }}></div>
            {/* Brew Modal */}
            <BrewModal />

        </body>
    );
}
