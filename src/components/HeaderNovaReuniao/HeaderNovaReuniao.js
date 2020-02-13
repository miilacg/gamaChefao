/* Implementacao do header das paginas de criar nova reunião*/

import React, { Component } from "react";
import Passos from "../../components/PassosNovaReuniao/PassosNovaReuniao";
import "./HeaderNovaReuniao.css";
import fechar from "../../assets/fechar.svg"

export default class HeaderNovaReuniao extends Component {
    constructor() {
        super();
        this.passos = [
            {
                numero: "1",
                legenda: "Definir"
            },
            {
                numero: "2",
                legenda: "Estruturar"
            },
            {
                numero: "3",
                legenda: "Confirmar"
            },
        ];
    }

    render() {
        return (
            <div className = "row">
                <h1>Criar reunião</h1>
                {this.passos.map((e, i) => (
                    <Passos content={e} key={i} number={i + 1} />
                ))}
                <img src = {fechar} alt = "botao de fechar"></img>
            </div>
        );
    }
}
