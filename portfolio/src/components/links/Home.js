import { Link } from "react-router-dom";

export default function HomeLink() {
  return(
<a className="active item">
          <Link to="/Projects">Back to Projects</Link>
        </a>  
  )
}

