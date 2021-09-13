import {Link} from 'react-router-dom';
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

return <header>
<div className="ui borderless main menu">
    <div className="ui text container">
      <div className="header item">
        <image className="logo" src="assets/images/logo.png"/>
        Characters
      </div>
      <a className="item"><Link to ='/'>All Characters</Link></a>
      <a className="item"><Link to ='/new-character'>New Character</Link></a>
      <a className="item"><Link to ='/favorites'>Favorites</Link></a>
      <a className="ui right floated dropdown item" tabindex="0">
        <Link to = "/">Help</Link>
      </a>
    </div>
  </div>
</header>
}

export default MainNavigation;