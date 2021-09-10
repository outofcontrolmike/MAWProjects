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
    
    const characterData =  {
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
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Character Name</label>
          <input type="text" min="1" max="20" required id="title" ref={nameRef} />
        </div>
        <div>
          <label>Age</label>
          <input type="number" name="age" min='1' max='100' required id="age" ref={ageRef} />
        </div>
        <div>
          <label>Character Gender</label>
          <input type="text" required id="gender" ref={genderRef} />
        </div>
        <div>
          <label>Origin</label>
          <input type="text" required id="origin" ref={originRef}/>
        </div>
        <div>
          <label>Image URL</label>
          <input type="url" required id="image"ref={imageRef} />
        </div>
        <div>
          <label>Description/Bio</label>
          <textarea type="text" rows="5" required id="description" ref={descriptionRef} />
        </div>
        <div>
            <button>Add Character!</button>
        </div>
      </form>
    </div>
  );
}

export default NewCharacterForm;
