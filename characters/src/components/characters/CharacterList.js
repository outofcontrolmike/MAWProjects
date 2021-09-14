import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  return (
    <div className="ui link cards container centered" style={{marginTop:"1.4rem"}}>
      {props.characters.map((character) => (
        <CharacterItem 
        key={character.id}
        id={character.id}
        image={character.image}
        name={character.name}
        age={character.age}
        gender={character.gender}
        origin={character.origin}
        description={character.description}
        />
      ))}
    </div>
  );
}

export default CharacterList;
