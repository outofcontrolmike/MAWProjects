import { Link } from "react-router-dom";

export default function HomeLink() {
  return (
    <a
      className=""
      style={{ float: "right" }}
    >
      <Link to="/Projects">Back to Projects</Link>
    </a>
  );
}
