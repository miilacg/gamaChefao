import React, { Component } from "react";
import Header from "../HeaderNextMeeting/HeaderNextMeeting";
import Resume from "../ResumeNextMeeting/ResumeNextMeeting";
import TopicsCard from "../TopicsCardNextMeeting/TopicsCardNextMeeting";
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
        this.topicsCard = [
            {
                number: 1,
                title: "Introdução",
                description:
                    "Todos falam um pouco sobre o que os trouxe ao projeto e os levantamentos feitos durante a última semana. Lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor.",
                time: 6
            },
            {
                number: 1,
                title: "Introdução",
                description:
                    "Todos falam um pouco sobre o que os trouxe ao projeto e os levantamentos feitos durante a última semana. Lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor.",
                time: 6
            },
            {
                number: 1,
                title: "Introdução",
                description:
                    "Todos falam um pouco sobre o que os trouxe ao projeto e os levantamentos feitos durante a última semana. Lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor.",
                time: 6
            },
            {
                number: 1,
                title: "Introdução",
                description:
                    "Todos falam um pouco sobre o que os trouxe ao projeto e os levantamentos feitos durante a última semana. Lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor.",
                time: 6
            }
        ];
    }

    render() {
        return (
            <div className="App-next-meeting">
                <Header content={this.header}></Header>
                <Resume></Resume>
                <h2>
                    Tópicos da Reunião
                    <span className="arrow-down"></span>
                </h2>
                {this.topicsCard.map((e, i) => (
                    <TopicsCard content={e} key={i} number={i + 1} />
                ))}
            </div>
        );
    }
}
