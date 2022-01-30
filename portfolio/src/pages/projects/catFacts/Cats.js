import React from 'react';
import CatNavigation from '../../../components/cats/CatNavigation';
//https://catfact.ninja/

//Main Component for Cats project
export default function Cats(props) {
  return <div id="catApp" className='ui container fluid'>
    <CatNavigation />
  </div>;
}
