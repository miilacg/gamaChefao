/* Implementacao do footer das paginas de criar nova reunião*/

import React, { Component } from "react";
import "./FooterNovaReuniao.css";

export default class FooterNovaReuniao extends Component {
    render() {
        return (
            <div class = "card-footer">
                <div className = "row footer">
                    <button class = "btn botao" type = "submit">ANTERIOR</button>

                    <div className = "footer-direito">
                        <button class = "btn botao-cancelar" type = "submit">CANCELAR</button>
                        <button class = "btn botao" type = "submit">PRÓXIMO</button>
                    </div>
                </div>
            </div>
        );
    }
}
