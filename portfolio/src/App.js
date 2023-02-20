import { Route, Switch } from "react-router-dom";

//Main Website imports
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contracts from "./pages/Contracts";
import Resume from "./pages/Resume";
import Faq from "./pages/Faq";
import Thanks from "./pages/Thanks";
import AllCommentsPage from "./pages/AllComments";
import Skills from "./pages/Skills";

import Layout from "./components/layout/Layout";

//Project Imports
import BeastWars from "./pages/projects/beast_wars/BeastWars";
import BMI from "./pages/projects/bmi_calc/Bmi";
import Bored from "./pages/projects/bored/Bored";
import Breweries from "./pages/projects/breweries/Brewery";
import Characters from "./pages/projects/characters/Characters";
import CoolCalc from "./pages/projects/cool_calc/CoolCalc";
import EarthWaterFire from "./pages/projects/earth_water_fire/EarthWaterFire";
import FFSearch from "./pages/projects/final_fantasy_search/FFSearch";
import GreatRace from "./pages/projects/great_race/GreatRace";
import Hikes from "./pages/projects/417Hikes/Hikes";
import Jokes from "./pages/projects/jokes/Jokes";
import Pokemon from "./pages/projects/pokemon/Pokemon";
import RandomDogs from "./pages/projects/randomDogs/Dogs";
import RandomUser from "./pages/projects/randomUser/RandomUser";
import Residentevil from "./pages/projects/residentevil/Residentevil";
import Timeline from "./pages/projects/timeline/Timeline";
import TMNT from "./pages/projects/tmnt/Tmnt";

//Hike Imports

//Collection Routes
import ProjectRoutes from "./components/routes/ProjectRoutes";

//Main app component that handles all the routing
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
        <Route path="/contracts">
          <Contracts />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/comments">
          <AllCommentsPage />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/thanks">
          <Thanks />
        </Route>

        {/* Reigion : Routes for projects */}
        <Route path="/beastwars">
          <BeastWars />
        </Route>
        <Route path="/bmi">
          <BMI />
        </Route>
        <Route path="/bored">
          <Bored />
        </Route>
        <Route path="/breweries">
          <Breweries />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/cool_calc">
          <CoolCalc />
        </Route>
        <Route path="/earth_water_fire">
          <EarthWaterFire />
        </Route>
        <Route path="/ff_search">
          <FFSearch />
        </Route>
        <Route path="/great_race">
          <GreatRace />
        </Route>
        <Route path="/hikes">
          <Hikes />
        </Route>
        <Route path="/jokes">
          <Jokes />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
        <Route path="/randomDogs">
          <RandomDogs />
        </Route>
        <Route path="/randomUser">
          <RandomUser />
        </Route>
        <Route path="/residentevil">
          <Residentevil />
        </Route>
        <Route path="/timeline">
          <Timeline />
        </Route>
        <Route path="/tmnt">
          <TMNT />
        </Route>

        {/* Region for Hikes project */}
        <ProjectRoutes />
      </Switch>
    </Layout>
  );
}

export default App;
