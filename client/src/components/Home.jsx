import React from "react";
import Header from "./Header";
import img from "../img/handwritingIMG.png"

function Home() {
    return (
        <>
            <Header transparent={true}></Header>
            <section className="homeSection">
                <div>
                    <h1>O sucesso começa com uma boa organização</h1>
                    <h2>Use o CollabTask para gerenciar seus projetos e fluxos de trabalho</h2>
                </div>
                <img src={img} alt="" />
            </section>
            <section className="descSection">
                <h2 align="center">Aumente sua produtividade</h2>
                <p align="center">Confira algumas das ferramentas disponíveis:</p>
                <div className="tools-list">
                    <div className="tools-list__item">
                        <h3>Organize seus projetos</h3>
                        <p>Adicione novos projetos, edite informações básicas e exclua projetos antigos</p>
                    </div>
                    <div className="tools-list__item">
                        <h3>Notas de trabalho</h3>
                        <p>Adicione notas de trabalho para manter suas ideias organizadas e acessíveis</p>
                    </div>
                    <div className="tools-list__item">
                        <h3>Lista de tarefas</h3>
                        <p>Crie listas de tarefas para organizar seu fluxo de trabalho e aumentar sua produtividade</p>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Home