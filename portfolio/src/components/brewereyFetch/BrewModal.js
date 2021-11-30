import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

function BrewModal() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button className="ui basic blue button large">Help!!!</Button>}
        >
            <Modal.Header><div style={{textAlign: "center"}}>Brewery Fetching Help</div></Modal.Header>
            <Modal.Content image>
                <Image wrapped />
                <Modal.Description>
                    <div class="rules">
                        <h3 id="brewh3">Basic Searching</h3>
                        <p id="brewP">You can choose to not enter anything into the input field and also choose not to select anything form the dropdowns.  This will print out a list of 50 breweries from the api dataset.

                            <p id="brewP">Once you enter text, make sure to select a filter.</p>
                        </p>
                        <hr />
                        <h3 id="brewh3" >Basic Filtering</h3>
                        <p id="brewP">
                            You have the options to filter by Name, City or Zipcode on the first select dropdown menu.  Once you select the filter you want, you'll want to type in the search value.
                        </p>
                        <hr />
                        <h3 id="brewh3">State Filtering</h3>
                        <p id="brewP">You can easily choose any state and submit a search based on your choice. Keep in mind that You won't be able to see every brewery in each state since we're limited to 50 items per request. *Adding multiple pages will be a stretch goal later on*</p>
                        <hr />
                        <h3 id="brewh3">Filtering by Brewery Type</h3>
                        <p id="brewP">It is possible to filter out certain Breweries by Type. Keep in mind your other filter setings when choosing this.</p>
                        <hr />
                        <h3 id="brewh3">Bonus Notes</h3>
                        <p id="brewP">The data set does offer breweries that are from other countries besides the US. Below are some examples of what you can request, as well as link to the API data set.</p>
                        <ul id="breweryInfo">
                            <li> <span>Battle Brewery</span></li>
                            <li> <span>Eight Degrees Brewing	</span></li>
                            <li> <span>Fyne Ales	</span></li>
                        </ul>
                        <a style={{color:"red", float:"right"}} target={"_blank"} href="https://github.com/openbrewerydb/openbrewerydb/tree/master/data">Data Set</a>
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
    )
}

export default BrewModal;
