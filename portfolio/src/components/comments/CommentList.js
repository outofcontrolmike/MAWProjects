import CommentItem from "./CommentItem";

function CommentList(props) {
  console.log("props",props);
  

  return (
    <div className="ui comments" style={{height: "100vh", overflowY: "auto"}}>
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
