import BrewMenu from "../../../components/brewereyFetch/BrewMenu"
import BrewModal from "../../../components/brewereyFetch/BrewModal"
export default function Brewery() {

    setTimeout(loadAll, 400)

    function loadAll() {
        console.log("loaded")
        //count variable
        let brewCount = 0;

        //Fetch breweries
        document.getElementById('submitFetch').addEventListener('click', grabFilters);

        //Get breweries
        function grabFilters() {
            let input = document.getElementById('inputValue').value;

            let filter = document.getElementById('filter');
            let filterValue = filter.options[filter.selectedIndex].value;

            let stateFilter = document.getElementById('stateFilter');
            let stateFilterValue = stateFilter.options[stateFilter.selectedIndex].innerHTML

            let brewType = document.getElementById('brewType')
            let brewValue = brewType.options[brewType.selectedIndex].value;

            getBreweries(input, filterValue, stateFilterValue, brewValue);
        }

        //get breweries
        function getBreweries(input, optionValue, stateValue, brewValue) {
            let filter = optionValue.toLowerCase();
            let stateFilter = "";
            let brewFilter = "";

            if (brewValue != "Brewery Type") {
                brewFilter = '&by_type=' + brewValue;
            }
            else {
                brewFilter = "";
            }

            //
            if (stateValue != "Select a State" && stateValue != "All") {
                stateFilter = '&by_state=' + stateValue;
            }

            fetch('https://api.openbrewerydb.org/breweries?by_' + filter + "=" + input + brewFilter + stateFilter + '&per_page=50')
                .then(response => response.json())
                .then((brew) => {
                    createBrew(brew);
                }
                )
                .catch((error) => {
                    console.error('Error:', error);
                    console.log("error");
                    alert("testing");
                });
            ;
        }

        function createBrew(brew) {
            document.getElementById('breweries').innerHTML = "";
            brewCount = 0;
            brew.forEach(createCard)
            document.getElementById('count').innerHTML = brewCount;
            if (brewCount === 0) {
                setTimeout(function () { alert("Your search brought back no results, try again"); }, 3000);

            }
        }

        function createCard(item) {

            brewCount++;

            // Create a bunch of elements for each card
            let container = document.createElement('div');
            let column1 = document.createElement('div');
            let column2 = document.createElement('div');
            let divider = document.createElement('hr');
            let breweryName = document.createElement('p');
            let breweryStreet = document.createElement('p');
            let breweryCity = document.createElement('p');
            let breweryState = document.createElement('p');
            let breweryPostal = document.createElement('p');
            let breweryCountry = document.createElement('p');
            let breweryType = document.createElement('span');
            let breweryPhone = document.createElement('p');
            let breweryURL = document.createElement('a');

            //icon elements
            let street, city, state, postal, country, phone, url;

            street = document.createElement('i');
            city = document.createElement('i');
            state = document.createElement('i');
            postal = document.createElement('i');
            country = document.createElement('i');
            phone = document.createElement('i');
            url = document.createElement('i');
            //find a way to pass all these in to a function that checks if empty

            breweryURL.href = item.website_url;
            breweryURL.href.className = "wrapURL";

            if (breweryURL != "https://mawportfolio.online/breweries") {
                breweryURL.innerHTML = breweryURL;
            }
            else {
                breweryURL.innerHTML = "N/A";
                breweryURL.id = "disableLink";
            }

            breweryStreet.innerHTML = item.street;
            breweryName.innerHTML = item.name;
            breweryCity.innerHTML = item.city;
            breweryState.innerHTML = item.state;
            breweryPostal.innerHTML = item.postal_code;
            breweryCountry.innerHTML = item.country;
            breweryType.innerHTML = item.brewery_type;
            breweryPhone.innerHTML = item.phone;


            //Additional styling

            container.className = "ui segment two column grid container stackable";
            container.id = "brewCard";
            column1.className = "column";
            column2.className = "column";
            breweryName.className = "ui header text massive container";
            breweryName.id = "header";
            breweryType.className = "floatMe";

            //add icons
            city.className = "city icon";
            street.className = "road icon";
            state.className = "gopuram icon";
            postal.className = "mail bulk icon";
            country.className = "globe icon";
            phone.className = "phone alternate icon";
            url.className = "linkify icon";

            breweryName.append(breweryType, divider)

            container.append(breweryName, column1, column2);

            //prepend
            breweryStreet.prepend(street);
            breweryCity.prepend(city);
            breweryState.prepend(state);
            breweryPostal.prepend(postal);
            breweryCountry.prepend(country);
            breweryPhone.prepend(phone);
            breweryURL.prepend(url);

            column1.append(breweryStreet, breweryCity, breweryState, breweryPostal);
            column2.append(breweryCountry, breweryPhone, breweryURL)
            document.getElementById('breweries').append(container);
        }

    }

    return (
        <body class="ui container" id="contain">
            <div style={{ backgroundColor: "aliceblue", marginTop: "50px" }} class="ui segment">
                <BrewMenu />
                <div class="ui vertical divider" id="divider">
                </div>
            </div>
            <div id="breweries" class="ui" style={{ marginTop: "50px" }}>
            </div>
            {/* Brew Modal */}
            <BrewModal />
        </body>
    )
}