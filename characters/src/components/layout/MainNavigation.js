import {Link} from 'react-router-dom';
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

return <header style={{ marginBottom:"2rem"}}>
<div className="ui menu four item secondary pointing">
    <div className="ui container">

      <a className="item"><Link to ='/'>All Characters</Link></a>
      <a className="item"><Link to ='/new-character'>New Character</Link></a>
      <a className="item"><Link to ='/favorites'>Favorites <span>{favoritesCtx.totalFavorites}</span></Link></a>
      <a className="item" tabindex="0">
        <Link to = "/">Help</Link>
      </a>
    </div>
  </div>
</header>
}

export default MainNavigation;