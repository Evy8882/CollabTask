import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewProject() {
    const [values, setValues] = useState({
        title: "",
        description: ""
    });
    const navigate = useNavigate()

    return (
        <>
            <Header></Header>

            <div className="formContainer">
                <h1>Criar novo projeto</h1>
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    // console.table(values)
                    axios.post("http://localhost/CollabTask/server/new_project.php", values)
                        .then(res => {
                            navigate("/my-projects")
                        })
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

                    <button type="submit">Criar</button>
                </form>
            </div>
        </>
    )
}
export default NewProject