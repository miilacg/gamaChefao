import React, { Component } from "react";
import "./HeaderNextMeeting.css";
import smallCalendar from "../../assets/calendar.svg";

export default class HeaderNextMeeting extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.content = this.props.content;
    }
    render() {
        return (
            <div className="App-next-meetings__container HeaderNextMeeting">
                <div className="container__header row">
                    <img src={smallCalendar} alt="small calendar"></img>
                    <span>{this.content.date}</span>
                </div>
                <h3>{this.content.title}</h3>
                <p>{this.content.description}</p>
            </div>
        );
    }
}
