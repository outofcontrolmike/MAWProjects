import NewCharacterForm from "../components/characters/NewCharacterForm";
import {useHistory} from 'react-router-dom';

function NewCharacterPage() {
    const history = useHistory();

    function addCharacterHandler(characterData)
    {
        let url = "https://characters-ba8da-default-rtdb.firebaseio.com/characters.json"
        fetch(url,{
            method: "POST",
            body: JSON.stringify(characterData),
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        
        ).then(() => {
            history.replace('/');
        })
    }

    return(
       <section>
           <h1>Add New Character</h1>
          <NewCharacterForm onAddCharacter={addCharacterHandler} />
       </section>

    )
}

export default NewCharacterPage;