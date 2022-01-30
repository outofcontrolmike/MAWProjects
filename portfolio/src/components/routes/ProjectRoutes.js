import { Route, Switch } from "react-router-dom";
import React from 'react';

import HikeContact from "../hikes/HikeContact";
import HikeGallery from "../hikes/HikeGallery";
import SpringfieldGallery from "../hikes/SpringfieldGallery";
import HikeThankYou from "../hikes/HikeThankYou";

import BreedsList from "../cats/BreedsList";
import CatsList from "../cats/CatsList";
import RandomCats from "../../pages/projects/catFacts/RandomCats.js";

//Hike routes to import into main app
export default function ProjectRoutes(props) {
  return (
    <>
    
        <Switch>
      <Route path="/hikeThankYou">
          <HikeThankYou />
        </Route>
        <Route path="/hikeContact">
          <HikeContact />
        </Route>
        <Route path="/hikeGallery">
          <HikeGallery />
        </Route>
        <Route path="/spfGallery">
          <SpringfieldGallery />
        </Route>
        </Switch>
        <Switch>
      <Route path="/breedsList">
          <BreedsList />
        </Route>
        <Route path="/catsList">
          <CatsList />
        </Route>
        <Route path="/cats">
          <RandomCats />
        </Route>
        </Switch>
        </>
  );
}
