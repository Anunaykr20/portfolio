import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { useEffect, useState } from "react";

function Navbar() {
    const [expandNavBar, setExpandNavBar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false)
    },[location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() =>{
                setExpandNavBar((prev)=>!prev)
            }}
            >
                <ReorderIcon/> 
            </button>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>
        </div>
    </div>
  );
}

export default Navbar
