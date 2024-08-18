import React from "react";
import Header from "./Header";

function Home() {
    return (
        <>
            <Header transparent={true}></Header>
            <section className="homeSection">
                <div>
                    <h1>Inicie, planeje, organize e execute seus projetos</h1>
                </div>
                <div>
                    <img src="https://via.placeholder.com/300" alt="" />
                </div>
            </section>
        </>
    )
}
export default Home