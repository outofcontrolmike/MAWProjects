import { Link } from "react-router-dom";

export default function HomeLink() {
  return(
<a className="active item padded"style={{position: "fixed", bottom: 0, right: 0, padding: 25}}>
          <Link to="/Projects">Back to Projects</Link>
        </a>  
  )
}

