import { Route } from "react-router-dom";

import React from 'react';
import BreedsList from "./BreedsList";
import CatsList from "./CatsList";
import RandomCats from "./RandomCats.js";

//Cats routes to import into main app
export default function CatRoutes() {
  return (
      <>
      <Route path="/breedsList">
          <BreedsList />
        </Route>
        <Route path="/catsList">
          <CatsList />
        </Route>
        <Route path="/randomCatFacts">
          <RandomCats />
        </Route>
      </>
  );
}
