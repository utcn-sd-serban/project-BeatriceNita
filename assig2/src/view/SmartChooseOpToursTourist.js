import React, { Component } from "react";
import model from "../model/model";
import ChooseOpToursTourist from "./ChooseOpToursTourist";
import toursListPresenter from "../presenter/toursListPresenter";

const mapModelStateToComponentState = modelState => ({
    tours: modelState.tours
});

export default class SmartChooseOpToursTourist extends Component {
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
            <ChooseOpToursTourist
                onListTours={toursListPresenter.onListTours}
                onFilterTours={toursListPresenter.onFilterTours}
                tours={this.state.tours} />
        );
    }
}