function CommentItem(props) {
  console.log(props);
  console.log(props.timestamp);
  let newDate = props.timestamp;
  console.log("newDate", newDate);
  return (
    <div className="comment">
      <div className="content">
        <p className="author" style={{ color: "white" }}>
          {props.comment}
        </p>
        <div className="metadata">
          <span className="date" style={{ color: "white" }}>
            {props.name}
          </span>
        </div>
        <div className="text" style={{ color: "white", float: "right" }}>
          {props.timestamp}
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
export default CommentItem;
