import React, { Component } from "react";
import "./ResumeNextMeeting.css";

export default class ResumeNextMeeting extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.minutes = this.props.minutes;
        this.date = this.props.date;
        this.priority = this.props.priority;
    }
    render() {
        return (
            <div className="row">
                <p>Duração: {this.minutes}</p>
                <p>{this.date}</p>
                <p>
                    <strong>Prioridade: </strong>
                    {this.priority}
                </p>
                <p>Integrantes:</p>
            </div>
        );
    }
}
