import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from "../ui/Card";
import FavoritesContext from '../../store/favorites-context';


function MeetupItem(props) {

   const favoritesCtx = useContext(FavoritesContext);

   const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(props) {
            if(itemIsFavorite) {
                favoritesCtx.removeFavorite(props.id);
            }
            else {
                favoritesCtx.addFavorite({
                    id: props.id,
                    title: props.title,
                    description: props.description,
                    image: props.image,
                    address: props.address
                })
                console.log("Were adding favorites");
            }}

    return(
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.action}>
            <button className={classes.btn} onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from favorites' : "Add To Favorites"}</button>
            </div>
            </Card>
        </li>
    )

}

export default MeetupItem;