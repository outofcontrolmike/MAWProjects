import React from 'react'

//Gender Select Drop down
export default function FFGenderSelect() {
    return (
        <div>
            <select className="ui fluid selection dropdown" id="genderSelect">
                <optgroup id="genders">
                    <option value="" disabled selected="selected">Gender Select</option>
                    <option>??</option>
                    <option>Male</option>
                    <option>Female</option>
                </optgroup>
            </select>
        </div>
    )
}
