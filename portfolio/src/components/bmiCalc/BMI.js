import React from 'react'

//BMI Calculator
export default function BMI() {
    return (
        <div className='ui'>
            <div id="normalCards" className='ui raised very padded text segment'>
                <div className="ui large form">
                    <div className="three fields">
                        <div className="field">
                            <label>Height (in)</label>
                            <input id="bmiHeight" placeholder="Height" type="tel" />
                        </div>
                        <div className="field">
                            <label>Weight (lbs)</label>
                            <input id="bmiWeight" placeholder="Weight" type="text" />
                        </div>
                        <div className="field">
                            <h3 id="bmiInfo">summed value</h3>
                        </div>
                    </div>
                    <span className="ui"> <button className="ui button" style={{ width: "50%" }} id="bmiCalc">Calculate BMI</button>
                    </span>                </div>
            </div>

        </div>
    )
}
