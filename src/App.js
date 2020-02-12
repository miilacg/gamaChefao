import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import NextMeeting from "./components/NextMeetings/NextMeeting";
import logoMeetAndPlan from "./assets/logo-meet-and-plan.png";

export default class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header row">
                    <div className="App-image">
                        <img
                            src={logoMeetAndPlan}
                            alt="Logo da Meet and Plan"
                        ></img>
                    </div>
                    <nav className="App-nav">
                        <ul className="App-nav__list row">
                            <li>Reuniões</li>
                            <li>Contatos</li>
                            <li>Premium</li>
                        </ul>
                    </nav>
                    <Button variant="contained" color="primary">
                        CRIAR REUNIÃO
                    </Button>
                </div>
                <div className="App-body row">
                    <div className="App-body__next-meetings">
                        <div className="App-next-meetings__title">
                            <h2 className="row">
                                Próximas reuniões
                                <div className="blue-ball">
                                    <span>2</span>
                                </div>
                            </h2>
                        </div>
                        <NextMeeting></NextMeeting>
                    </div>
                </div>
            </div>
        );
    }
}
