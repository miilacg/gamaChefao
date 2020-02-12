import React, { Component } from "react";
import "./HeaderNextMeeting.css";

export default class HeaderNextMeeting extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.content = this.props.content;
        console.log(props);
    }
    render() {
        return (
            <div className="App-next-meetings__container">
                <img src={this.content.image} alt={this.content.image}></img>
                <span>{this.content.date}</span>
                <h3>{this.content.title}</h3>
                <p>{this.content.description}</p>
            </div>
        );
    }
}
