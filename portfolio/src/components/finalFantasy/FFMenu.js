import React from 'react'
import GameSelect from "./FFGameSelect";
import JobSelect from "./FFJobSelect";
import GenderSelect from "./FFGenderSelect";
import RaceSelect from "./FFRaceSelect";
import ButtonGroup from "./FFButtonMenu";

export default function FFMenu() {
    return (
        <div>
            <div id="searchTools" className="ui stackable segment container">
                <div className="ui container">
                    <div id="inputContainer" className="ui icon input fluid">
                        <input type="text" id="searchInput" placeholder="Search...Character Name"/>
                        <i className ="inverted circular search link icon" tabindex="0" type ="submit" id="onSubmit"></i>
                    </div>
                </div>
                <div className="ui container">

                    <div className="ui accordion" id="accordion">
                        <div className="title" id="title">
                            <i className="dropdown icon"></i>
                            Advanced Search
                        </div>
                        {/* Place components within this accordion */}
                        <div className="content">
                            <div className="transition hidden">
                                <p>
                                <GameSelect />
                                <JobSelect />
                                <RaceSelect />
                                <GenderSelect />
                                </p>
                                <ButtonGroup/>
                            </div>
                        </div>

                        </div>
                        </div>
                        </div>
                        </div>

                           
                           )
}
