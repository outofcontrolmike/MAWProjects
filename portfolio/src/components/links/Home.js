import { Link } from "react-router-dom";

export default function HomeLink() {
  return(
<a className="active item padded" style={{padding: "2rem"}}>
          <Link to="/Projects">Back to Projects</Link>
        </a>  
  )
}

