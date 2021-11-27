import ProjectsLink from "../../components/links/Home";
import React from "react";

function BrewMenu() {
  let url = "";

  let brewCount = 0;

  function handleInput() {
    document.getElementById("brewInput").value = "";
    document.getElementById("brewInput").placeholder = "";
  }

  function accordionOpen() {
    let search = document.getElementById("brewInput");
    let radioCity = document.getElementById("radioCity");
    let searchRadio = document.getElementById("searchRadio");

    let title = document.getElementById("title").className;

    search.disabled = title === "title" ? false : true;

    search.value = "Search by an advanced filter";

    if (radioCity.checked) {
      search.value = "Enter a city";
    }

    let postalCity = document.getElementById("radioPostal");
    if (postalCity.checked) {
      search.value = "Enter a postal code";
    }

    if (searchRadio.checked) {
      search.value = "Enter a Search Term";
    }
    // document.getElementById('brewBtn').className = "ui button red disabled";
    advancedRequest();
  }

  function advancedRequest() {
    let radioPostal = document.getElementById("radioPostal");
    if (!radioPostal.checked) {
      //Main Filter

      let url = "";
      let stateFilter = document.getElementById("stateFilter");
      let search = document.getElementById("brewInput");
      let cityRadio = document.getElementById("radioCity");

      let stateFilterValue =
        stateFilter.options[stateFilter.selectedIndex].innerHTML;

      //Determine State to filter by
      if (stateFilterValue != "State") {
        search.value = "Results for breweries in " + stateFilterValue;
        url =
          "https://api.openbrewerydb.org/breweries?by_state=" +
          stateFilterValue +
          "&per_page=50'";
        if (cityRadio.checked) {
          search.value =
            "Enter a city name that belongs to " + stateFilterValue;
        }
      }

      let brewType = document.getElementById("brewType");
      let brewValue = brewType.options[brewType.selectedIndex].value;
      let brewText = brewValue.toLowerCase();

      if (brewValue != "Brewery Type") {
        search.value = "Results for " + brewValue + " breweries";
        url =
          "https://api.openbrewerydb.org/breweries?by_type=" +
          brewText +
          "&per_page=50'";

        if (cityRadio.checked) {
          search.value = "Enter a city name for " + brewValue + " breweries";
        }
      }

      if (stateFilterValue != "State" && brewValue != "Brewery Type") {
        search.value =
          "Results for " + brewValue + " breweries " + "in " + stateFilterValue;
        url =
          "https://api.openbrewerydb.org/breweries?by_state=" +
          stateFilterValue +
          "&by_type=" +
          brewText +
          "&per_page=500'";

        if (cityRadio.checked) {
          search.value =
            "Results for " +
            brewValue +
            " breweries " +
            "in " +
            stateFilterValue;
        }
      }
    }

    document.getElementById("count").innerHTML = 0;

    getBreweries(url);
  }
  //Wipe out list when user types into input field
  function handleChange() {
    document.getElementById("breweries").innerHTML = "";
    document.getElementById("count").innerHTML = 0;
  }

  //Initial brewery submit for Basic Search
  function handleSubmit(url) {
    document.getElementById("breweries").innerHTML = "";

    //radio check and input
    let searchRadio = document.getElementById("searchRadio");
    let input = document.getElementById("brewInput").value;

    let stateFilter = document.getElementById("stateFilter");
    let stateFilterValue =
      stateFilter.options[stateFilter.selectedIndex].innerHTML;

    if (input != "") {
      url =
        "https://api.openbrewerydb.org/breweries/search?query=" +
        input +
        "&per_page=500'";
    }

    //Advanced search
    if (!searchRadio.checked) {
      url = "https://api.openbrewerydb.org/breweries?";

      //Radio buttons
      let radioCity = document.getElementById("radioCity");
      let postalCity = document.getElementById("radioPostal");

      //State value
      let stateFilter = document.getElementById("stateFilter");
      let stateFilterValue =
        stateFilter.options[stateFilter.selectedIndex].innerHTML;

      //Brewery type value
      let brewType = document.getElementById("brewType");
      let brewValue = brewType.options[brewType.selectedIndex].value;
      let brewText = brewValue.toLowerCase();

      if (radioCity.checked) {
        url += "by_city=" + input + "&";
      }

      if (postalCity.checked) {
        url += "by_postal=" + input + "&";
      }

      if (stateFilterValue != "State") {
        url += "by_state=" + stateFilterValue + "&";
      }

      if (brewValue != "Brewery Type") {
        url += "by_type=" + brewText + "&";
      }

      url += "";
    }
    getBreweries(url);
  }

  //get breweries based on search term
  function getBreweries(url) {
    fetch(url)
      .then((response) => response.json())
      .then((brew) => {
        createBrew(brew, url);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //Maps through response data
  function createBrew(brew, url) {
    document.getElementById("breweries").innerHTML = "";
    brewCount = 0;
    brew.map(createCard);
    document.getElementById("count").innerHTML = brewCount;
    // if (brewCount === 0) {
    //     setTimeout(function () {
    //         alert("Your search brought back no results, try again");
    //     }, 3000);
    // }
  }

  //Create Brewery card elements
  function createCard(item) {
    brewCount++;

    // Create a bunch of elements for each card
    let container = document.createElement("div");
    let column1 = document.createElement("div");
    let column2 = document.createElement("div");
    let divider = document.createElement("hr");
    let breweryType = document.createElement("p");
    let breweryName = document.createElement("p");
    let breweryStreet = document.createElement("p");
    let breweryCity = document.createElement("p");
    let breweryState = document.createElement("p");
    let breweryPostal = document.createElement("p");
    let breweryCountry = document.createElement("p");
    let breweryPhone = document.createElement("p");
    let breweryURL = document.createElement("a");

    //icon elements
    let street, city, state, postal, country, phone, url, type;

    street = document.createElement("i");
    city = document.createElement("i");
    state = document.createElement("i");
    postal = document.createElement("i");
    country = document.createElement("i");
    phone = document.createElement("i");
    url = document.createElement("i");
    type = document.createElement("i");

    let icons = [street, city, state, postal, country, phone, url, type];

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

    breweryName.style.color = "white";
    breweryName.style.fontSize = "30px";
    breweryName.style.textTransform = "uppercase";
    breweryType.style.textTransform = "capitalize";

    //add icons
    city.className = "city icon";
    street.className = "road icon";
    state.className = "gopuram icon";
    postal.className = "mail bulk icon";
    country.className = "globe icon";
    phone.className = "phone alternate icon";
    url.className = "linkify icon";
    type.className = "beer icon";

    breweryName.append(divider);

    container.append(breweryName, column1, column2);

    //prepend
    breweryStreet.prepend(street);
    breweryCity.prepend(city);
    breweryState.prepend(state);
    breweryPostal.prepend(postal);
    breweryCountry.prepend(country);
    breweryPhone.prepend(phone);
    breweryURL.prepend(url);
    breweryType.prepend(type);

    column1.append(breweryType, breweryStreet, breweryCity, breweryState);
    column2.append(breweryPostal, breweryCountry, breweryPhone, breweryURL);
    document.getElementById("breweries").append(container);
  }

  return (
    <>
      <div className="ui container relaxed very padded stackable ">
        <div className="ui transparent huge icon input">
          <input
            onChange={handleChange}
            onClick={handleInput}
            id="brewInput"
            type="text"
            className="ui"
            style={{ color: "gold", textAlign: "center" }}
            placeholder="Type in a Brewery name or filter keyword"
          />

          <button
            onClick={handleSubmit}
            className="ui black button large basic"
            id="brewBtn"
          >
            <i className="beer icon large"></i>
          </button>
          <span
            type="color"
            id="count"
            className="text ui red large"
            style={{ float: "right", marginLeft: "3rem" }}
          >
            0
          </span>
        </div>
        <div className="ui inverted accordion">
          <div onClick={accordionOpen} className="title" id="title">
            <i className="dropdown icon"></i>
          </div>
          <div className="content ui container relaxed very padded stackable">
            <h1>Main filter</h1>
            <hr />
            <div class="ui form">
              <div class="grouped fields">
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="frequency"
                      id="searchRadio"
                      checked="checked"
                    />
                    <label id="brewLabel">Search Term</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="frequency" id="radioCity" />
                    <label id="brewLabel">City</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="frequency" id="radioPostal" />
                    <label id="brewLabel">Postal</label>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h1>Advanced Filters</h1>
            <form className="ui form">
              <div className="field">
                <label id="brewLabel">Filter by State</label>
                <select
                  id="stateFilter"
                  className="ui fluid search three column dropdown"
                  multiple=""
                >
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
            </form>
            <button
              onClick=""
              className="ui blue button brewHelp"
              style={{ padding: "1rem", marginTop: "2rem" }}
            >
              Help!
            </button>
            <button className="ui purple basic button">
              <ProjectsLink />
            </button>
            <h4 className="ui text white">
              *The max allowed item results has a limit of 50*
            </h4>
            {/* <p className="transition hidden">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BrewMenu;
