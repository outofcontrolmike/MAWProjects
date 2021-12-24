import { Link } from "react-router-dom";

export default function HomeLink() {
  return (
    <a
      className="active item padded"
      style={{ marginTop: "2rem", float: "right" }}
    >
      <Link to="/Projects">Back to Projects</Link>
    </a>
  );
}
