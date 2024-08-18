import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const DeleteModal = ({show="hidden", values={}, children}) => {
    const navigate = useNavigate()
    if (show != "hidden"){
    return (
        <div className="modal">
            <h3>Tem certeza que deseja apagar permanentemente esse projeto? Essa ação não poderá ser desfeita</h3>
            <div className="buttonsContainer">
            <button type="button" className="dangerButton" onClick={() => {
                axios.post("http://localhost/CollabTask/server/delete_project.php", values)
                    .then((res) => {
                        // console.log("Deletado com sucesso: " + res);
                        navigate("/my-projects")
                    }).catch(err => console.log(err))
            }
            }>Deletar Projeto</button>
            {children}
            </div>
        </div>
    )
    }
}