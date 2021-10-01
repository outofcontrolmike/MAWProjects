import { useRef } from "react";

function NewCommentForm(props) {
  const nameRef = useRef();
  const messageRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredMessage = messageRef.current.value;

    let messageData = {
      name: enteredName,
      message: enteredMessage,
    };

    props.onAddMessage(messageData);
  }
  return (
    <div className="ui">
      <form
        onSubmit={submitHandler}
        style={{ marginTop: "2rem" }}
        className="ui form ui raised very padded text container segment"
      >
        <h1>Please Leave a Comment!</h1>
        <div className="ui divider"></div>
        <div className="field">
          <label> Name or Alias</label>
          <input
            type="text"
            min="1"
            max="25"
            size="50"
            required
            id="name"
            ref={nameRef}
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label>Comment</label>
          <textarea
            type="text"
            min="1"
            max="500"
            required
            id="comment"
            ref={messageRef}
            placeholder="This site has potential to be cool!"
          />
        </div>
        <button className="ui button primary fluid large" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewCommentForm;
