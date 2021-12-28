import React from "react";
import { Button, Image, Modal } from "semantic-ui-react";

//Modal for Help option
function BrewModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button className="ui inverted primary basic large">Help!!!</Button>
      }
    >
      <Modal.Header>
        <div style={{ textAlign: "center" }}>Brewery Fetching Help</div>
      </Modal.Header>
      <Modal.Content image>
        <Image wrapped />
        <Modal.Description>
          <div class="rules">
            <h3 id="brewh3">Basic Searching</h3>
            <p id="brewP">
              By default the input filed will accept any keyword that you desire
              to type in. For example you could type in Mother and you would see
              Mother's brewing Company from Springfield MO populate in the
              list.
            </p>

            <p id="brewP">
              Anytime you open up the advanced menu it will disable the input
              box and clear out the input field.
            </p>
            <hr />
            <h3 id="brewh3">Main Filtering</h3>
            <p id="brewP">
              You have the options to filter by Search Term, City or zip code.
              You can easily select to filter by a city and choose advanced
              filtering options for the state and brewery type, but it's not
              required.
            </p>
            <hr />
            <h3 id="brewh3">State Filtering</h3>
            <p id="brewP">
              You can easily choose any state and submit a search based on your
              choice. Keep in mind that You won't be able to see every brewery
              in each state since we're limited to 50 items per request.
            </p>
            <hr />
            <h3 id="brewh3">Filtering by Brewery Type</h3>
            <p id="brewP">
              It is possible to filter out certain Breweries by Type. Keep in
              mind your other filter settings when choosing this.
            </p>
            <hr />
            <h3 id="brewh3">Bonus Notes</h3>
            <p id="brewP">
              The data set does offer breweries that are from other countries
              besides the US. Below are some examples of what you can request,
              as well as link to the API data set.
            </p>
            <ul id="breweryInfo">
              <li>
                {" "}
                <span>Battle Brewery</span>
              </li>
              <li>
                {" "}
                <span>Eight Degrees Brewing </span>
              </li>
              <li>
                {" "}
                <span>Fyne Ales </span>
              </li>
            </ul>
            <a
              style={{ color: "red", float: "right" }}
              rel="noreferrer"
              target={"_blank"}
              href="https://github.com/openbrewerydb/openbrewerydb/tree/master/data"
            >
              Data Set
            </a>
          </div>
          {/* <!-- end stats--> */}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default BrewModal;
