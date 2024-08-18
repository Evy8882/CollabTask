import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "./DeleteModal";
function EditHomePage({ data = { id: "", title: "", description: "" } }) {
    const [values, setValues] = useState({
        id: "",
        title: "",
        description: ""
    });
    const [showDelete, setShowDelete] = useState("hidden");
    const dialog = useRef(null);
    const navigate = useNavigate()
    useEffect(() => {
        // console.log("rodou")
        if (data.id) {
            setValues({
                id: data.id,
                title: data.title,
                description: data.description
            })
        }
        // console.table(data)
    }, [data])

    return (
        <div className="editFormContainer">
            <h1>Editar informações básicas</h1>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                axios.put("http://localhost/CollabTask/server/edit_project.php", values)
                    .catch(err => console.log(err));
            }}>
                <label htmlFor="title">Nome do projeto:</label>
                <input type="text" value={values.title}
                    id="title" name="title" required
                    placeholder="Meu Novo Projeto"
                    onChange={(e) => {
                        setValues({ ...values, title: e.target.value })
                    }}
                />

                <label htmlFor="description">Descrição:</label>
                <input type="text" value={values.description}
                    id="description" name="description" required
                    placeholder="Escreva aqui sobre o projeto, seus objetivos e caracteristicas"
                    onChange={(e) => {
                        setValues({ ...values, description: e.target.value })
                    }}
                />

                <button type="submit">Salvar Mudanças</button>
                <button type="button" className="dangerButton" onClick={()=>setShowDelete("show")}>Deletar Projeto</button>
                <DeleteModal show={showDelete} values={values}>
                <button className="cancelButton" onClick={()=>{setShowDelete("hidden")}}>Cancelar</button>
                </DeleteModal>
            </form>
        </div>
    )
}

export default EditHomePage