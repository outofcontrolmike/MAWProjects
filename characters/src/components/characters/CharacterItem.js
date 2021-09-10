//mport { useContext } from 'react';
//import FavoritesContext from '../../store/favorites-context';


function CharacterItem(props) {

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
            {/* //<button>{itemIsFavorite ? 'Remove from favorites' : "Add To Favorites"}</button> */}
            </div>
        </li>
    )

}

export default CharacterItem;