import Navigation from "../components/layout/Navigation";

function Projects(props) {
  return (
    <div>
      <Navigation />

      <div className="ui" id="projects">
        <div className="ui divider"></div>
        <div className="ui link cards centered vertical" id="list"></div>
      </div>
    </div>
  );
}

export default Projects;
