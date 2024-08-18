import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faNoteSticky, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import EditHomePage from "./EditHomePage";
import EditNotesPage from "./EditNotesPage";

function ManageProject() {

    const { id } = useParams();
    const [data, setData] = useState();
    const [index, setIndex] = useState(1);
    const [page, setPage] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost/CollabTask/server/get_project.php?id=${id}`)
            .then((res) => {
                // console.log("data!")
                setData(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        switch (index) {
            case 1:
                setPage(<EditHomePage data={data} />)
                break;
            case 2:
                setPage(<EditNotesPage data={data} />)
                break;
            default:
                setPage(null)
                break;
        }
    }, [index, data])

    return (
        <>
            <section className="manageContainer">
                <section className="manageNav">
                    <button className="navButton" onClick={() => navigate("/")}>
                        <img src="http://localhost:3000/favicon.png" alt="" width={26}/>
                        <div className="revealText"><b>CollabTask.com</b></div>
                    </button>
                    <button className="navButton" onClick={() => setIndex(1)}>
                        <FontAwesomeIcon icon={faHouse} style={{ "fontSize": "1.5em" }} />
                        <div className="revealText">Início</div>
                    </button>
                    <button className="navButton" onClick={() => setIndex(2)}>
                        <FontAwesomeIcon icon={faNoteSticky} style={{ "fontSize": "1.5em" }} />
                        <div className="revealText">Notas</div>
                    </button>
                    <button className="navButton" onClick={() => setIndex(3)}>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ "fontSize": "1.5em" }} />
                        <div className="revealText">To Do</div>
                    </button>
                </section>
                <section className="mainManage">
                    {page}
                </section>
            </section>
        </>
    )
}

export default ManageProject