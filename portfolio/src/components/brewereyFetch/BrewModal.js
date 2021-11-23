import React from 'react'
import $ from 'jquery';


function BrewModal() {
    return (
        <div>
            {/* // <!--Modal--> */}
<div class="ui modal">
 <i class="close icon"></i>
 <div class="header">
   <h2 id="name">Helpful Info</h2>
 </div>
 <div class="content">
   <div class="description">
   <div class="rules">
<h3>Basic Searching</h3>
<p id="brewP">You can choose to not enter anything into the input field and also choose not to select anything form the dropdowns.  This will print out a list of 50 breweries from the api dataset.

<p id="brewP">Once you enter text, make sure to select a filter.</p>
</p>
<hr />
<h3>Basic Filtering</h3>
<p id="brewP">
 You have the options to filter by Name, City or Zipcode on the first select dropdown menu.  Once you select the filter you want, you'll want to type in the search value.
</p>
<hr />
<h3>State Filtering</h3>
<p id="brewP">You can easily choose any state and submit a search based on your choice. Keep in mind that You won't be able to see every brewery in each state since we're limited to 50 items per request. *Adding multiple pages will be a stretch goal later on*</p>
<hr />
<h3>Filtering by Brewery Type</h3>
<p id="brewP">It is possible to filter out certain Breweries by Type. Keep in mind your other filter setings when choosing this.</p>
<hr />
<h3>Bonus Notes</h3>
<p id="brewP">The data set does offer breweries that are from other countries besides the US. Below are some examples of what you can request, as well as link to the API data set.</p>
<ul>    
<li> <span>Battle Brewery</span></li>
   <li> <span>Eight Degrees Brewing	</span></li>
   <li> <span>Fyne Ales	</span></li>
</ul>
<a id="brewA" target={"_blank"} href="https://github.com/openbrewerydb/openbrewerydb/tree/master/data">Data Set</a>
</div>
{/* <!-- end stats--> */}
   </div>
 </div>
</div>
</div>
    )
}

export default BrewModal
