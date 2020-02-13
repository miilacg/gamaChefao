import React, { Component } from "react";
import "./TopicsCardNextMeeting.css";

export default class TopicsCardNextMeeting extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.number = this.props.number;
        if (this.props.content) {
            this.content = this.props.content;
            this.title = this.content.title;
            this.description = this.content.description;
            this.time = this.content.time;
        }
    }
    render() {
        return (
            <div className = "NextMeeting-TopicsCard row">
                <table class = "table table-borderless">
                    <thead>
                        <tr>
                            <th class = "numero" scope = "col">
                                <div className = "circuloTopico">
                                    {this.number}
                                </div>
                            </th>
                            <th class = "legenda" scope = "col">
                                <h4>{this.title}</h4>
                            </th>
                            <th class = "resumo" scope = "col">
                                <p>{this.description}</p>
                            </th>
                            <th class = "duracao" scope = "col">
                                <p class = "tempoNumero">{this.time}</p>
                                <p class = "tempo">min</p>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}
