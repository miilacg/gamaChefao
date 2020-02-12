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
            <div className="row">
                <span className="green-ball">{this.number}</span>
                <h3>{this.title}</h3>
                <p>{this.description}</p>
                <div className="background-time column">
                    <p className="time__number">{this.time}</p>
                    <p className="time__min">min</p>
                </div>
            </div>
        );
    }
}
