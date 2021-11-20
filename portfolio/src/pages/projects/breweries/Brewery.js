import BrewMenu from "../../../components/brewereyFetch/BrewMenu";
import BrewModal from "../../../components/brewereyFetch/BrewModal";
export default function Brewery() {



//Wipe out list when user hovers over input
  function handleChange() {
    document.getElementById('breweries').innerHTML = "";
  }

    //Number of breweries related
    let brewCount = 0;
    function createBrew(brew) {
        // document.getElementById("breweries").innerHTML = "";
        brewCount = 0;
        brew.map(createCard);
        // document.getElementById("count").innerHTML = brewCount;
        // if (brewCount === 0) {
        //     setTimeout(function () {
        //         alert("Your search brought back no results, try again");
        //     }, 3000);
        // }
    }

    //Create Brewery cards
    function createCard(item) {
        brewCount++;

        // Create a bunch of elements for each card
        let container = document.createElement("div");
        let column1 = document.createElement("div");
        let column2 = document.createElement("div");
        let divider = document.createElement("hr");
        let breweryName = document.createElement("p");
        let breweryStreet = document.createElement("p");
        let breweryCity = document.createElement("p");
        let breweryState = document.createElement("p");
        let breweryPostal = document.createElement("p");
        let breweryCountry = document.createElement("p");
        let breweryType = document.createElement("span");
        let breweryPhone = document.createElement("p");
        let breweryURL = document.createElement("a");

        //icon elements
        let street, city, state, postal, country, phone, url;

        street = document.createElement("i");
        city = document.createElement("i");
        state = document.createElement("i");
        postal = document.createElement("i");
        country = document.createElement("i");
        phone = document.createElement("i");
        url = document.createElement("i");

        let icons = [street, city, state, postal, country, phone, url];

        icons.forEach((element) => {
            element.style.color = "red";
            element.style.paddingRight = "40px";
        });

        //find a way to pass all these in to a function that checks if empty

        breweryURL.href = item.website_url;
        let bUrl = breweryURL.href;
        // bUrl.className = "wrapURL";

        if (breweryURL != "http://localhost:3000/null") {
            breweryURL.innerHTML = breweryURL;
        } else {
            breweryURL.innerHTML = "N/A";
            breweryURL.style.pointerEvents = "none";
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

        container.className = "ui two column grid container stackable";
        container.id = "brewCard";
        column1.className = "column";
        column2.className = "column";
        breweryName.className = "ui header text massive container";
        breweryType.className = "floatMe";

        breweryName.style.color = "white";
        breweryName.style.fontSize = "30px";
        breweryName.style.textTransform = "uppercase";

        //add icons
        city.className = "city icon";
        street.className = "road icon";
        state.className = "gopuram icon";
        postal.className = "mail bulk icon";
        country.className = "globe icon";
        phone.className = "phone alternate icon";
        url.className = "linkify icon";

        breweryName.append(breweryType, divider);

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
        column2.append(breweryCountry, breweryPhone, breweryURL);
        document.getElementById("breweries").append(container);
    }

    //Initial brewery submit
    function handleSubmit() {
        document.getElementById('breweries').innerHTML = "";
        let input = document.getElementById("brewInput").value;
        grabFilters(input);
    }

    //Grab filters
    function grabFilters(input) {
            console.log("input from grabfilters", input)
            getBreweries(input);
    }

      //get breweries based on search term
      function getBreweries(input) {
        let filter = input;
        

        fetch(
            "https://api.openbrewerydb.org/breweries/search?query=" +
            filter
        )
            .then((response) => response.json())
            .then((brew) => {
                 createBrew(brew);
            })
            .catch((error) => {
                console.error("Error:", error);
                console.log("error");
                alert("testing");
            });
    }

    return (
        <body className="ui segment" style={{ backgroundColor: "black", height: "100vh" }}>

            <div className="ui container relaxed very padded stackable">
                <div className="ui transparent huge icon input">
                    <input onMouseEnter={handleChange} id="brewInput" type="text" className="ui" style={{ color: "gold" }} placeholder="Type in a Brewery name..." />
                    <button onClick={handleSubmit} className="ui button large basic yellow"><i className="beer icon large"></i></button>
                </div>
                <div className="ui inverted accordion">
                    <div className="title text small">
                        <i className="dropdown icon"></i>
                        Advanced Searching
                    </div>
                    <div className="content ui container relaxed very padded stackable">
                        <form className="ui form">
                            <div className="field">
                                <label id="brewLabel">Filter by State</label>
                                <select id="stateFilter" className="ui fluid search three column dropdown" multiple="">
                                    <option value="">State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                            <div className="field">
                                <label id="brewLabel">Filter by Brewery Type</label>
                                <select className="ui compact selection dropdown" id="brewType">
                                    <option>Brewery Type</option>
                                    <option>Nano</option>
                                    <option>Micro</option>
                                    <option>Regional</option>
                                    <option>Brewpub</option>
                                    <option>Planning</option>
                                    <option>Contract</option>
                                    <option>Proprietor</option>
                                    <option>Closed</option>
                                </select>
                            </div>
                            <div className="field">
                                <label id="brewLabel">Filter by City or Zipcode</label>
                                <select id="filter" className="ui compact selection dropdown">
                                    {/* <!-- Some type of label--> */}
                                    <option disabled selected>Filter Type</option>
                                    <option>None</option>
                                    <option>Name</option>
                                    <option>City</option>
                                    <option>Postal</option>
                                </select>
                            </div>
                        </form>

                        <button onClick="" className="ui button basic yellow huge" style={{ padding: "1rem", marginTop: "2rem" }}>Help!</button>
                        {/* <p className="transition hidden">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p> */}
                    </div>
                </div>
            </div>


            {/* <BrewMenu /> */}
            <div id="breweries" className="ui" style={{ marginTop: "50px" }}></div>
            {/* Brew Modal */}
            <BrewModal />

        </body>
    );
}
