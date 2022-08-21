import CommentItem from "./CommentItem";

//Comment List component
function CommentList(props) {
  console.log("props", props);

  return (
    <div
      className="ui"
      style={{ height: "90vh", overflowY: "scroll", marginLeft: "2rem" }}
    >
      <h1 className="mainPageh1" id="roboHeader">
        Comments Feed{" "}
      </h1>
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
