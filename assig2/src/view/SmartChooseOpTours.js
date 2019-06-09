import React, { Component } from "react";
import model from "../model/model";
import ChooseOpTours from "./ChooseOpTours";
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
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <ChooseOpTours
                onAddTour={toursListPresenter.onAddTour}
                onListTours={toursListPresenter.onListTours}
                onFilterTours={toursListPresenter.onFilterTours}
                tours={this.state.tours} />
        );
    }
}