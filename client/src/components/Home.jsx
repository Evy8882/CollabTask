import React from "react";
import Header from "./Header";
import img from "./../img/handwritingIMG.png"

function Home() {
    return (
        <>
            <Header transparent={true}></Header>
            <section className="homeSection">
                <div>
                    <h1>O sucesso começa com uma boa organização</h1>
                    <h2>Use o CollabTask para gerenciar seus projetos e fluxos de trabalho</h2>
                </div>
                <img src={img} alt="" width={550} />
            </section>
            <section className="descSection">
                <h2>Aumente sua produtividade</h2>
                Confira algumas das ferramentas disponíveis:
            </section>
        </>
    )
}
export default Home