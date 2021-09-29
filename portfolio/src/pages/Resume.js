import Navigation from "../components/layout/Navigation";
function Resume() {
    return(
        <div>
        <Navigation />
        <div className="ui three column segment piled stackable grid">
            <div className="ui column">
                <h1>Resume</h1>
                
            </div>
            <div className="ui column">
                <h1>Skills</h1>
            </div>
            <div className="ui column">
                <h1>Certs and misc</h1>
            </div>
        </div>
        </div>

    )
}

export default Resume;