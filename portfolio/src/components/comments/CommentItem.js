function CommentItem(props) {
  console.log("props", props);
  return (
    <div className="comment">
      <div className="content">
        <a className="author">Matt</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM - Get current date</span>
        </div>
        <div className="text">How artistic!</div>
      </div>
    </div>
  );
}
export default CommentItem;
