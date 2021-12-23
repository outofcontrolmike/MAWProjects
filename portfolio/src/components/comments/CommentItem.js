//Comment Item for used for mapping
function CommentItem(props) {
  console.log(props);
  console.log(props.timestamp);

  let firstChar = props.name.charAt(0);
  return (
    <div className="event" style={{ fontSize: "1.5em" }}>
      <div className=" circular ui label small yellow" id="commentLabel">
        <span>
          <div>{firstChar.toUpperCase()}</div>
        </span>
      </div>
      <div className="content">
        <div className="summary" style={{ color: "white" }}>
          <span style={{ color: "gold" }}>{props.name}</span> Posted a comment
          <div className="date" style={{ color: "grey" }}>
            {props.timestamp}
          </div>
        </div>
        <div className="extra text" style={{ color: "white" }}>
          {props.comment}
        </div>
      </div>
    </div>
  );
}
export default CommentItem;
