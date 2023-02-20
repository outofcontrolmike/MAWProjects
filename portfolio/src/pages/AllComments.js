import { useState, useEffect } from "react";
import CommentList from "../components/comments/CommentList";
import NewCommentForm from "../components/comments/NewCommentForm";
import { TabTitle } from "../utils/helperFunctions";

function AllCommentsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComments, setLoadedComments] = useState([]);

  TabTitle("Comments");
  let url = "https://comments-8cd7f-default-rtdb.firebaseio.com/Comments.json";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const comments = [];
        for (const key in data) {
          const comment = {
            id: key,
            ...data[key],
          };
          comments.push(comment);
          comments.reverse();
        }
        setIsLoading(false);
        setLoadedComments(comments);
      });
  }, [url]);

  if (isLoading) {
    return (
      <section style={{ backgroundColor: "black" }}>
        <div className="ui container">
          <div className="ui active white slow double loader"></div>
          <p>Loading comments :)</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
    );
  }

  return (
    <div className="">
      <div
        className="ui container fluid"
        style={{ backgroundColor: "black", height: "100vh" }}
      >
        <div
          className="ui two column doubling stackable grid very padded relaxed"
          id="commentsPage"
          style={{
            backgroundColor: "black",
          }}
        >
          <div className="ui container center aligned column">
            <CommentList comments={loadedComments} />
          </div>

          <br></br>
          <div className="ui column" style={{ backgroundColor: "black" }}>
            <NewCommentForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCommentsPage;
