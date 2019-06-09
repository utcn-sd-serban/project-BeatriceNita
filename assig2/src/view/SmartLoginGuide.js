import React, { Component } from "react";
import modelGuide from "../model/modelGuide";
import Login from "./Login";
import usersLoginPresenter from "../presenter/usersLoginPresenter";

const mapModelStateToComponentState = modelState => ({
    usernameg: modelState.currentGuide.usernameg,
    passwordg: modelState.currentGuide.passwordg
});

export default class SmartLoginGuide extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(modelGuide.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelGuide.addListener("change", this.listener);
    }

    componentWillUnmount() {
        modelGuide.removeListener("change", this.listener);
    }

    render() {
        return (
            <Login
                onLogin={usersLoginPresenter.onLogin}
                onChangeTourist={usersLoginPresenter.onChangeTourist}
                onLoginGuide={usersLoginPresenter.onLoginGuide}
                onChangeGuide={usersLoginPresenter.onChangeGuide}
                />
        );
    }
}