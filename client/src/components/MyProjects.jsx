import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

function MyProjects() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost/CollabTask/server/get_projects.php")
            .then((res) => {
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    // console.table(data)

    return (
        <>
            <Header></Header>
            <section className="myProjectsContainer">
                <h1>Meus projetos</h1>
                <Link to={"/new-project"}><button className="newProjectButton"> + Novo</button></Link>
                <div className="projectsContainer">
                    {
                        data.map((project) => {
                            return (
                                <Link className="projectPreview" key={project.id} to={"/manage/" + project.id}>
                                    <h3>{project.title}</h3>
                                    <div className="projectDescriptionPreview">
                                        {project.description}
                                    </div>
                                    <br /><br />
                                </Link>
                            )
                        })}
                </div>
            </section>
        </>
    )
}
export default MyProjects