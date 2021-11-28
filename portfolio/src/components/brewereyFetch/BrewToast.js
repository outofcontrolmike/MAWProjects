import React from 'react'

function BrewToast() {
    console.log("Are we even doing anything?")
    return (
        <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
                We're sorry we can't apply that discount
            </div>
            <p>That offer has expired
            </p></div>
    )
}

export default BrewToast
