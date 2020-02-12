import React, { Component } from "react";
import Header from "../HeaderNextMeeting/HeaderNextMeeting";
import Resume from "../ResumeNextMeeting/ResumeNextMeeting";
import "./NextMeeting.css";

export default class NextMeeting extends Component {
    constructor() {
        super();
        this.header = {
            date: "Amanhã",
            title: "Reunião de Alinhamento com a equipe.",
            description:
                "Definição do planning para o novo sistema a ser desenvolvido para a empresa SkyLab.net. Vamos discutir o resultado da pesquisa inicial, discutir as metas para criação, definir papéis, planejar datas de entregas e definir os novos fluxos. Lorem ipsum dolor sit amet consecutor dolor sit amen."
        };
    }

    render() {
        return (
            <div>
                <Header content={this.header}></Header>
                <Resume></Resume>
            </div>
        );
    }
}
