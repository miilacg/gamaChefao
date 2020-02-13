/* Implementacao de cada passo presente no header das paginas de criar nova reunião*/

import React, { Component } from "react";
import "./PassosNovaReuniao.css";

export default class PassosNovaReuniao extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.content = this.props.content;        
        this.number = this.props.number;
        if (this.props.content) {
            this.content = this.props.content;
            this.legenda = this.content.legenda;
        }
    }
    render() {
        return (
            <div className = "row passo">
                <div className = "circulo">
                    {this.content.numero}
                </div>
                <h4>{this.content.legenda}</h4>
            </div>            
        );
    }
}