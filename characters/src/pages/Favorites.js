import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import CharacterList from '../components/characters/CharacterList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
       content =  <p>Start adding some Favorites</p>
        
    }
    else {
        content = <CharacterList characters={favoritesCtx.favorites}></CharacterList>;
    }
    return(
    <section>
        <h1>My Favorite Characters</h1>
        {content}
    </section>
    );
}

export default FavoritesPage;