import { Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function Thanks(props) {
    let history = useHistory();

function handleClick()
{
    history.push("/");
}


    return(
        <div className="ui middle aligned center aligned grid" id="thankYou"> 
            <div className="column">
            <h1>Thank you so much!!</h1>
            <h3>I will be getting back to you as soon as I can!</h3>
            <div>
                <br></br>
  <button className="ui inverted orange button huge" onClick={handleClick}>Back to Home</button>
            </div>
            </div>
            </div>
    )
}

export default Thanks;