import Background from '../assets/img/Yosemite.jpg';

function Home() {
    return(
        <div className="ui segment container very padded  raised">
        <div className="content">
            <div className="ui">

                <h1 class="ui header">What is the purpose of this site?</h1>
                <h2 className="ui header">
                    This site serves multliple purposes:
                </h2>
                <div className="ui list">
                    <div class="item">Viewing Characters that are pulled from a database</div>
                    <div class="item">Functionallity for adding Characters to said database</div>
                    <div class="item">Option for adding custom characters to a favorites page</div>
                </div>
    <hr></hr>
                <h1 class="ui header">Where does the character data come from?</h1>
                <p>
                    The character data is fetched form a Google FireBase Realtime Database.
                </p>
          
        <hr></hr>

                <h2 class="ui header">How was this site built? </h2>
                <p>
                I built this site with React Js and Fomantic UI.  Also with the inspiration from a React Crash Course Tuotrial I found on YouTube. I highly recomend this tutorial.
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dorf8i6lCuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <hr></hr>

            <h1 class="ui header">
Why doesn't the character number update after adding a character?
</h1>
                <p>The page doesn't show the update until the page itself refreshes.  Simply refresh your browser.
                    </p>
    <hr></hr>

    <h1 class="ui header">Why does my Favorites list reset to 0?</h1>
                <p>Unfortunately this app won't hold on to the favorite characters list. That's more of an advanced React concept that I'm not ready for yet. Maybe someday.
                    </p>

            </div>

        </div>
    </div>
    )
}

export default Home;