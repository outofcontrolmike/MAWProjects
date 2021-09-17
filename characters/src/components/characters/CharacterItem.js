//mport { useContext } from 'react';
//import FavoritesContext from '../../store/favorites-context';

import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function CharacterItem(props) {

    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatus() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        }
        else {
            favoritesCtx.addFavorite({
                id: props.id,
                image: props.image,
                name: props.name,
                age: props.age,
                gender: props.gender,
                origin: props.origin,
                description: props.description,
            });
        }
    }

    return (
        <div className="card">
            <div className="ui image medium">
                <img style={{ height: "350px", objectFit: "cover", }} src={props.image} />
            </div>
            <div className="content">
                <div className="header">{props.name}</div>
                <div className="ui meta">
                    <div>Origin: {props.origin}</div>
                </div>
                
                <div class="description">
                    <p style={{marginBottom: "1rem"}}>{props.age} year old {props.gender} </p>
                    {props.description}
                </div>
            </div>
            <div class="extra content">
            <span id="favoriteBtn" onClick={toggleFavoriteStatus}>{itemIsFavorite ? <button className="ui button fluid red small">Remove From Favorites</button> : <button className="ui button blue small fluid">Add To Fravorites</button>}</span>

            </div>
       
        </div>
    )

}

export default CharacterItem;