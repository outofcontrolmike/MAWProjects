import Navigation from "../components/layout/Navigation";
import { useHistory } from "react-router";
import NewCommentForm from "../components/comments/NewCommentForm";
import CommentList from "../components/comments/CommentList";
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
      history.push("/comments");
    });
  }
  return (
    <div>
      <Navigation />
      <CommentList />
    </div>
  );
}
export default Messages;
