import Navigation from "../components/layout/Navigation";
function Resume() {
    return(
        <div>
        <Navigation />
        <div className="ui two column relaxed very padded segment piled stackable grid">
            <div className="ui column">
                <h1>Skills</h1>
                <hr></hr>
                <div>
                    <ul>
                        <li>HTML</li>
                        <li>Word Processing & Excel</li>
                        <li>Windows</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>C#</li>
                        <li>Java</li>
                        <li>SQL Server</li>
                        <li>XML</li>
                        <li>Unbuntu</li>
                        <li>Command Line</li>
                    </ul>
                </div>
            </div>
            <div className="ui column">
                <h1>Certifications & Achievments</h1>
                <hr></hr>
                <h1>HTML & CSS</h1>
                <h1>JavaScript</h1>
                <h1>SQL</h1>
            </div>
        </div>
        </div>

    )
}

export default Resume;