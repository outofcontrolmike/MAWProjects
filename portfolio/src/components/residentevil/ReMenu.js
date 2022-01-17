import React from 'react'
import { NavLink } from "react-router-dom";

export default function ReMenu() {
    return (
        <div className="ui four item secondary pointing menu center aligned stackable" id="reMenu">
            <a activeClassName="reSelected" className="item reMenuItem" id="chris" style={{color: "white"}}>
                Chris Redfield
            </a>
            <a activeClassName="reSelected"
            id="jill"
            style={{color: "white"}}
                className="item reMenuItem">
                Jill Valentine
            </a>
            <a className="item reMenuItem" activeClassName="reSelected" id="leon"
            style={{color: "white"}}
            >
                Leon S. Kennedy
            </a>
            <a className="item" activeClassName="reSelected" 
            style={{color: "white"}}
            >
                <NavLink
                    activeClassName="reSelected"
                    to="/projects"
                    style={{color: "grey"}}
                >
                    Projects
                </NavLink>
            </a>
        </div>
    )
}
