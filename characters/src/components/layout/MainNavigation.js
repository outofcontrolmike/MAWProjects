import {Link} from 'react-router-dom';
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    let help = document.getElementById('help');

   function handleAllCharacters() {
    const allCharacters = document.getElementById('allCharacters');
    const newCharacter = document.getElementById('newCharacter');
    const favorites = document.getElementById('favorites');

        newCharacter.className = 'item';
        favorites.className = 'item';
        allCharacters.className = 'item active';
    }

  function handleNewCharacter() {
    const allCharacters = document.getElementById('allCharacters');
    const newCharacter = document.getElementById('newCharacter');
    const favorites = document.getElementById('favorites');

    allCharacters.className = 'item';
    favorites.className = 'item';
    newCharacter.className = 'item active';
    
  }

  function handleFavorite() {
    const allCharacters = document.getElementById('allCharacters');
    const newCharacter = document.getElementById('newCharacter');
    const favorites = document.getElementById('favorites');

    allCharacters.className = 'item';
    newCharacter.className = 'item';
    favorites.className = 'item active';
  }

  //help modal

return <header style={{ marginBottom:"2rem"}}>
<div className="ui menu four item secondary pointing" id="mainNavigation">
    <div className="ui container">

      <a className="item active" id="allCharacters" onClick={handleAllCharacters}><Link to ='/'>All Characters</Link></a>
      <a className="item" id="newCharacter" onClick={handleNewCharacter}><Link to ='/new-character'>New Character</Link></a>
      <a className="item"  id="favorites" onClick={handleFavorite}><Link to ='/favorites'>Favorites <span>{favoritesCtx.totalFavorites}</span></Link></a>
      <a className="item" id="help" tabindex="0">
        <Link to = "/">Help</Link>
      </a>
    </div>
  </div>
</header>
}

export default MainNavigation;