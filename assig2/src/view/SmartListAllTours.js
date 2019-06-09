import React, { Component } from "react";
import model from "../model/model";
import ListAllTours from "./ListAllTours";
import toursListPresenter from "../presenter/toursListPresenter";

const mapModelStateToComponentState = modelState => ({
    tours: modelState.tours
});

export default class SmartChooseOpTours extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
        toursListPresenter.onInit();
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <ListAllTours
                onCreateTour={toursListPresenter.onCreateTour}
                onDeleteTour={toursListPresenter.onDeleteTour}
                tours={this.state.tours} />
        );
    }
}