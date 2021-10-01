import {useRef} from "react";

function NewCharacterForm(props) {
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const originRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();

function submitHandler(event)
{
  
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;
    const enteredGender = genderRef.current.value;
    const enteredOrigin = originRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    
    let characterData =  {
        name: enteredName,
        age: enteredAge,
        gender: enteredGender,
        origin: enteredOrigin,
        image: enteredImage,
        description: enteredDescription
    };

    props.onAddCharacter(characterData);
}

  return (
    <div className="ui form">
      <form onSubmit={submitHandler}>
        <div className="grouped fields">
        <div className="field">
          <label>Character Name</label>
          <input className="ui input" type="text" min="1" max="20" size="50" required id="title" ref={nameRef}  />
        </div>
        <div className="field">
          <label>Age</label>
          <input className="ui input"type="number" name="age" min='1' max='100' required id="age" ref={ageRef} />
        </div>
        {/* start gender */}
        <div className="field">
          <label>Gender</label>
          <input type="text" required id="origin" ref={genderRef}/>
        </div>
        {/* end gender */}
        <div className="field">
          <label>Origin</label>
          <input type="text" required id="origin" ref={originRef} />
        </div>
        <div className="field">
          <label>Image URL</label>
          <input type="url" required id="image"ref={imageRef}  />
        </div>
        <div className="field"> 
          <label>Description/Bio</label>
          <textarea type="text" rows="5" required id="description" ref={descriptionRef} />
        </div>
        <div>
            <button className="ui button primary raised fluid">Add Character to Database</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default NewCharacterForm;
