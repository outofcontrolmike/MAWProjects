import { setState, useRef } from "react";

function NewCommentForm(props) {
  const nameRef = useRef();
  const messageRef = useRef();

  const commentDate = new Date();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredMessage = messageRef.current.value;

    let messageData = {
      name: enteredName,
      message: enteredMessage,
      timestamp: commentDate.toLocaleDateString(),
    };

    AddMessageHandler(messageData);
  }

  function AddMessageHandler(messageData) {
    let url =
      "https://comments-8cd7f-default-rtdb.firebaseio.com/Comments.json";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(messageData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log("messageData", messageData);
      window.location.reload();
    });
  }

  return (
    <div className="ui form" style={{ backgroundcolor: "black" }}>
      <form
        onSubmit={submitHandler}
        className="ui form ui raised very padded text container"
      >
        <h1>Please Leave a Comment!</h1>
        <hr></hr>
        <div className="field" id="input" style={{ backgroundcolor: "black" }}>
          <label style={{ backgroundcolor: "black" }}> Name or Alias</label>
          <input
            style={{ backgroundcolor: "black" }}
            id="input"
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
            style={{ backgroundcolor: "black" }}
            type="text"
            min="1"
            max="500"
            required
            id="comment"
            ref={messageRef}
            placeholder="This site has potential to be cool!"
          />
        </div>
        <button className="ui button orange fluid large" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewCommentForm;
