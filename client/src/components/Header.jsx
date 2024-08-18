import React from "react";
import { Link } from "react-router-dom";

function Header({transparent=false}) {
    return (
        <header style={transparent ? {"backgroundColor": "transparent"} : {"backgroundColor": "var(--main-color)"}} >
            <nav>
                <Link to={"/"}>CollabTask.com</Link>
                <Link to={"/new-project"}>Novo projeto</Link>
                <Link to={"/my-projects"}>Meus projetos</Link>
            </nav>
            
        </header>
    )
}

export default Header