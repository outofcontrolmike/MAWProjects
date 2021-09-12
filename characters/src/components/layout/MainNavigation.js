import {Link} from 'react-router-dom';
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

return <header>
    <div>
        Characters
    </div>
    <nav>
        <ul>
            <li>
                <Link to ='/'>All Characters</Link>
            </li>
            <li>
            <Link to ='/new-character'>New Character</Link>
            </li>
            <li>
            <Link to ='/favorites'>Favorite Characters
            <span>{favoritesCtx.totalFavorites}</span></Link>
            </li>
            <li>
                <button>Help</button>
            </li>
        </ul>
    </nav>
</header>
}

export default MainNavigation;