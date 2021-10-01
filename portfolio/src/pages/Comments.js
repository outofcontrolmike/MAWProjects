import Navigation from "../components/layout/Navigation";
import { useHistory } from "react-router";
import NewCommentForm from "../components/comments/NewCommentForm";

function Messages() {
  const history = useHistory();

  function addMessageHandler(messageData) {
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
      history.replace("/messages");
    });
  }
  return (
    <div>
      <Navigation />
      <section className="ui " id="form">
        <NewCommentForm onAddMessage={addMessageHandler} />
      </section>
    </div>
  );
}
export default Messages;
