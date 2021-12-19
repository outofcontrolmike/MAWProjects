import CommentItem from "./CommentItem";

function CommentList(props) {
  console.log("props", props);

  return (
    <div
      className="ui"
      style={{ height: "100vh", overflowY: "auto", marginLeft: "2rem" }}
    >
      <h1 style={{ color: "yellow" }}>Comments Feed </h1>
      <div className="ui feed medium">
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
    </div>
  );
}

export default CommentList;
