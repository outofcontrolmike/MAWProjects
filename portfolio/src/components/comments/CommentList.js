import CommentItem from "./CommentItem";

//Comment List component
function CommentList(props) {
  console.log("props", props);

  return (
    <div
      className="ui"
      style={{
        overflowY: "scroll",
        marginLeft: "2rem",
      }}
    >
      <div className="ui feed medium" style={{ height: "90vh" }}>
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
