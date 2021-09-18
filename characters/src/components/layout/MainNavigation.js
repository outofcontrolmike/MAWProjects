import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
function MainNavigation(props) {
  const favoritesCtx = useContext(FavoritesContext);

  let help = document.getElementById("help");

  let length = 0;
  grabCharacterTotal(length);

  function grabCharacterTotal() {
    {
      fetch(
        "https://characters-ba8da-default-rtdb.firebaseio.com/characters.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          objectLength(data);
        });
    }
  }

  function objectLength(data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        ++length;
      }
    }
    console.log(length);
    document.getElementById("length").innerHTML = length;
    document.getElementById("characterTotal").innerHTML = length;
    return length;
  }

  function handleAllCharacters() {
    const allCharacters = document.getElementById("allCharacters");
    const newCharacter = document.getElementById("newCharacter");
    const favorites = document.getElementById("favorites");

    newCharacter.className = "item";
    favorites.className = "item";
    allCharacters.className = "item active";
  }

  function handleNewCharacter() {
    const allCharacters = document.getElementById("allCharacters");
    const newCharacter = document.getElementById("newCharacter");
    const favorites = document.getElementById("favorites");

    allCharacters.className = "item";
    favorites.className = "item";
    newCharacter.className = "item active";
  }

  function handleFavorite() {
    const allCharacters = document.getElementById("allCharacters");
    const newCharacter = document.getElementById("newCharacter");
    const favorites = document.getElementById("favorites");

    allCharacters.className = "item";
    newCharacter.className = "item";
    favorites.className = "item active";
  }

  //help modal

  return (
    <header style={{ marginBottom: "2rem" }}>
      <div className="ui menu five item secondary pointing" id="mainNavigation">
        <div className="ui container">
          <a
            className="item active"
            id="allCharacters"
            onClick={handleAllCharacters}
          >
            <Link to="/">
              All Characters <span id="length"></span>
            </Link>
          </a>
          <a className="item" id="favorites" onClick={handleFavorite}>
            <Link to="/favorites">
              Favorites <span>{favoritesCtx.totalFavorites}</span>
            </Link>
          </a>
          <a className="item" id="newCharacter" onClick={handleNewCharacter}>
            <Link to="/new-character">Add Character</Link>
          </a>
          <a className="item" id="faq" tabindex="0">
            <Link to="/faq">FAQ</Link>
          </a>
          <div className="item ui statistic">
            <div class="value" id="characterTotal"></div>
            <div>Characters</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
