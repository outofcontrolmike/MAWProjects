import CommentItem from "./CommentItem";

function CommentList(props) {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      {props.comments.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          name={comment.name}
          message={comment.message}
        />
      ))}
    </div>
  );
}

export default CommentList;
