import CommentItem from "./CommentItem";

function CommentList(props) {
  console.log("props", props);

  return (
    <div
      className="ui comments container"
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <h1>What people are saying..................</h1>
      {props.comments.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          name={comment.name}
          comment={comment.message}
          timestamp={comment.timestamp}
        />
      ))}
    </div>
  );
}

export default CommentList;
