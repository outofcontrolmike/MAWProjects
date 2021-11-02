function CommentItem(props) {
  console.log(props)
  console.log(props.timestamp);
  let newDate = props.timestamp;
  console.log("newDate",newDate);
  return (
    <div className="comment">
      <div className="content">
        <p className="author">{props.comment}</p>
        <div className="metadata">
          <span className="date">{props.name}</span>
        </div>
        <div className="text">{props.timestamp}</div>
      </div>
    </div>
  );
}
export default CommentItem;
