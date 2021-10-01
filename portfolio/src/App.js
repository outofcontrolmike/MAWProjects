import { Link, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
