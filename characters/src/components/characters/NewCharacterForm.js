function NewCharacterForm() {
  return (
    <div>
      <form>
        <div>
          <label>Character Name</label>
          <input type="text" required id="title" />
        </div>
        <div>
          <label>Age</label>
          <input type="text" required id="age" />
        </div>
        <div>
          <label>Character Gender</label>
          <input type="text" required id="gender" />
        </div>
        <div>
          <label>Origin</label>
          <input type="text" required id="origin" />
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" required id="title" />
        </div>
        <div>
          <label>Description/Bio</label>
          <textarea type="text" rows="5" required id="title" />
        </div>
        <div>
            <button>Add Character!</button>
        </div>
      </form>
    </div>
  );
}

export default NewCharacterForm;
