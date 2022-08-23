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
      window.location.reload();
    });
  }

  return (
    <div
      className="ui form inverted segment very padded relaxed"
      id=""
      style={{ alignSelf: "center", height: "90vh", margin: "1rem" }}
    >
      <form
        style={{ fontSize: "1.3rem" }}
        onSubmit={submitHandler}
        className="ui raised very padded text container"
      >
        <p>
          {" "}
          <span className="ui text big yellow" style={{ textAlign: "center" }}>
            Leave a Comment!
          </span>
          <span>
            <i
              class="feather alternate icon yellow big"
              style={{ float: "right" }}
            ></i>
          </span>
        </p>
        <div className="field" id="input">
          <label> Name or Alias</label>
          <input
            type="text"
            min="1"
            max="25"
            size="50"
            required
            id=""
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
            rows="20"
            ref={messageRef}
            placeholder="Say something nice please."
          />
        </div>
        <br></br>
        <button
          className="ui button fluid large yellow circular"
          type="submit"
          style={{
            fontSize: "1.2rem",
            outline: "ridge",
            outlineColor: "black",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewCommentForm;
