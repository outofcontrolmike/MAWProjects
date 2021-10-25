import { useState, useEffect } from "react";
import CommentList from "../components/comments/CommentList";
import Navigation from "../components/layout/Navigation";
import NewCommentForm from "../components/comments/NewCommentForm";

function AllCommentsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComments, setLoadedComments] = useState([]);

  let url = "https://comments-8cd7f-default-rtdb.firebaseio.com/Comments.json";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        console.log(response.json);
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
        }
        setIsLoading(false);
        setLoadedComments(comments);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <div class="ui segment container">
          <div class="ui active slow blue double loader"></div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Navigation />
    
    <div className="ui two column doubling stackable grid segment">
      <div className="column">
      
      <CommentList comments={loadedComments} />
      </div>
      <div className="column">
          <NewCommentForm />
      </div>
    </div>

    </div>
  );
}

export default AllCommentsPage;
