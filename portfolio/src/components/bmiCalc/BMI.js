import React from 'react'

//BMI Calculator
export default function BMI() {
    return (
        <div className='ui'>
            <div id="normalCards" className="ui raised very padded text segment">
                <h1 style={{color: "black"}}>Body Mass Index Calculation</h1>
                <hr/>
                    <div className="ui two column doubling stackable grid container ">
                        <div className="ui column grid">
                            <label id="bmiLabel">Height (in)</label>
                            <input id="bmiHeight" type="tel" maxlength="2" className="input" />
                            <div>
                                <label id="bmiLabel">Weight(lbs)</label>
                                <input id="bmiWeight" type="tel" maxlength="3" max="3" />
                            </div>
                            <span className="ui"> <button className="ui button" id="bmiCalc">Calculate BMI</button>
                            </span>
                        </div>
                        <div className="ui column grid" id="bmiInfo">
                            <h3>
                                *Fill out this form to get your BMI

                            </h3>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}
