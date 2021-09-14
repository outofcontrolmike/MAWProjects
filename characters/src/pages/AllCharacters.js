import { useState, useEffect } from 'react'; 
import CharacterList  from "../components/characters/CharacterList";
function AllCharactersPage() {
const [isLoading,setIsLoading] = useState(true);
const [loadedCharacters, setLoadedCharacters] = useState([]);

  let url = "https://characters-ba8da-default-rtdb.firebaseio.com/characters.json";

  useEffect(() => {
    setIsLoading(true);
    fetch(url).then(response => {
      return response.json();
     }).then(data => {
       const characters = [];
       for(const key in data) {
         const character = {
            id: key,
            ...data[key]
         };

         characters.push(character);

       }
       setIsLoading(false);
       setLoadedCharacters(characters);
     });
  }, []);


  if(isLoading) {
    return (
      <section>
             </section>
    );
  }
    //get a list of Characters


 return(<section>
      <CharacterList characters={loadedCharacters}/>
 </section>)
}

export default AllCharactersPage;