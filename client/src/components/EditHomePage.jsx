import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
function EditHomePage({ data = { id: "", title: "", description: "" } }) {
    const [values, setValues] = useState({
        id: "",
        title: "",
        description: ""
    });
    const [showDelete, setShowDelete] = useState("hidden");
    const navigate = useNavigate();
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
                <button type="button" className="dangerButton" onClick={() => setShowDelete("show")}>Deletar Projeto</button>
                <Modal show={showDelete}>
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
                        <button className="cancelButton" onClick={() => { setShowDelete("hidden") }}>Cancelar</button>
                    </div>
                </Modal>
            </form>
        </div>
    )
}

export default EditHomePage