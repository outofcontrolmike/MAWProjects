import { useRef } from "react";

//Comment form Component
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
    <div className="ui form" id="commentForm">
      <form
        style={{ fontSize: "1.5rem" }}
        onSubmit={submitHandler}
        className="ui form ui raised very padded text container commentsForm"
      >
        <h1 className="mainPageh1" id="roboHeader">
          Please Leave a Comment!
        </h1>
        <div className="field" id="input">
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
        <button
          className="ui button basic fluid large orange"
          id="submit"
          type="submit"
          style={{ color: "gold", fontSize: "1.4rem", outline: "ridge" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewCommentForm;
