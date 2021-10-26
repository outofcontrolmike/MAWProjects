function CommentItem(props) {
  console.log(props)
  return (
    <div className="comment">
      <div className="content">
        <a className="author">{props.name}</a>
        <div className="metadata">
          <span className="date">{props.timestamp}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
}
export default CommentItem;
