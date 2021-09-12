//mport { useContext } from 'react';
//import FavoritesContext from '../../store/favorites-context';

import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function CharacterItem(props) {

   const favoritesCtx = useContext(FavoritesContext);

   const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatus() {
        if(itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        }
        else {
            favoritesCtx.addFavorite({
                id: props.id,
                name: props.name,
                age: props.age,
                gender: props.gender,
                origin: props.origin,
                description: props.description,
            });
        }
    }

    return(
        <li>
            
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <div>
                <h3>{props.name}</h3>
                <p> {props.gender}</p>
                <p> {props.age}</p>
                <p> {props.origin}</p>
                <p>{props.description}</p>
            </div>
            <div>
                <button onClick={toggleFavoriteStatus}>{itemIsFavorite ? 'Remove From Favorites' : "Add To Fravorites"}</button>
            </div>
        </li>
    )

}

export default CharacterItem;