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
    const enteredGender = genderRef.current.checked
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
          <input className="ui input" type="text" min="1" max="20" size="50" required id="title" ref={nameRef} style={{marginBottom: "1.3rem"}} />
        </div>
        <div className="field">
          <label>Age</label>
          <input className="ui input"type="number" name="age" min='1' max='100' required id="age" ref={ageRef} style={{marginBottom: "1.3rem"}}/>
        </div>
        {/* start gender */}
        <div class="inline fields">
    <label>Gender?</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" id="male" ref={genderRef} name="gender" checked="checked"/>
        <label>Male</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
      <input type="radio" id="female" name="gender" ref={genderRef}/>
        <label>Female</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
      <input type="radio" id="??" name="gender" ref={genderRef}/>
        <label>??</label>
      </div>
    </div>
  </div>
        {/* end gender */}
        <div>
          <label>Origin</label>
          <input type="text" required id="origin" ref={originRef} style={{marginBottom: "1.3rem"}}/>
        </div>
        <div>
          <label>Image URL</label>
          <input type="url" required id="image"ref={imageRef} style={{marginBottom: "1.3rem"}} />
        </div>
        <div>
          <label>Description/Bio</label>
          <textarea type="text" rows="5" required id="description" ref={descriptionRef}style={{marginBottom: "1.3rem"}} />
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
