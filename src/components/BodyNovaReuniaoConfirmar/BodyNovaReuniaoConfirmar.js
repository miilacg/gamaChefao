/*Implementação do corpo do terceiro passo para criar uma reunião*/

import React, { Component } from "react";
import Header from "../../components/HeaderNextMeeting/HeaderNextMeeting";
import Resume from "../../components/ResumeNextMeeting/ResumeNextMeeting";
import Body from "../../components/TopicosNovaReuniao/TopicosNovaReuniao";
import "./BodyNovaReuniaoConfirmar.css";

export default class BodyNovaReuniaoConfirmar extends Component {
    constructor() {
        super();
        this.assunto = {
            title: "Reunião de Alinhamento com a equipe.",
            description:
                "Definição do planning para o novo sistema a ser desenvolvido para a empresa SkyLab.net. Vamos discutir o resultado da pesquisa inicial, discutir as metas para criação, definir papéis, planejar datas de entregas e definir os novos fluxos."
        };
    }

    render() {
        return (
            <div>
                <div className = "card-body">
                    <Header content = {this.assunto}></Header>
                    <Resume 
                        minutes = "42 min"
                        date = "segunda-feira, 10/fev 14:00-15:00"
                        priority = "Muito Alta"
                    />
                    <Body></Body>
                </div>
            </div>  
        );
    }
}