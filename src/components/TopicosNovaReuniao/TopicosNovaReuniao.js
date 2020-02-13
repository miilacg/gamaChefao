import React, { Component } from "react";
import Topicos from "../../components/TopicsCardNextMeeting/TopicsCardNextMeeting";
import "./TopicosNovaReuniao.css";

export default class bodyNovaTopico extends Component {
    constructor() {
        super();
        this.topicos = [
            {
                number: 1,
                title: "Introdução",
                description:
                    "Todos falam um pouco sobre o que os trouxe ao projeto e os levantamentos feitos durante a última semana.",
                time: 6
            },
            {
                number: 2,
                title: "O que eu já fiz?",
                description:
                    "Todos falam um pouco sobre o que os trouxe ao projeto e os levantamentos feitos durante a última semana.",
                time: 12
            }
        ];
    }

    render() {
        return (
            <div className = "col">
                <p class = "tituloTopicos">Tópicos da Reunião</p>
                {this.topicos.map((e, i) => (
                    <Topicos content={e} key={i} number={i + 1} />
                ))}
            </div>
        );
    }
}
