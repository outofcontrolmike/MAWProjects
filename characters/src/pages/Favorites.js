import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import CharacterList from '../components/characters/CharacterList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
       content =  <div class="ui container red message">
       <div class="header">
        There were no favorites found!!
       </div>
       <p>Please add some favorites by viewing All Characters</p>
     </div>
        
    }
    else {
        content = <CharacterList characters={favoritesCtx.favorites}></CharacterList>;
    }
    return(
    <section>
        {content}
    </section>
    );
}

export default FavoritesPage;