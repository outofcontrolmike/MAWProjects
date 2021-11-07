function Thanks() {

function handleClick()
{
    console.log("button KNows it's being clicked")
    window.open("http://localhost:3000/");
}

    return(
        <div className="container ui relaxed padded">
            <h1>Thank you so much, {"userName"}!!</h1>
            <h3>I will be getting back to you as soon as I can!</h3>
            <div>
  <button className="ui inverted blue button huge" onClick={handleClick}>Back to Home</button>
            </div>
            </div>
    )
}

export default Thanks;