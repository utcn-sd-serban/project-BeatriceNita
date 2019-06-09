import React, { Component } from "react";
import model from "../model/model";
import FilterTours from "./FilterTours";
import toursListPresenter from "../presenter/toursListPresenter";

const mapModelStateToComponentState = modelState => ({
   
});

export default class SmartFilterTours extends Component {
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
            <FilterTours
                onFilteredTours={toursListPresenter.onFilteredTours}
                onChangeToSearch={toursListPresenter.changeToSearch} />
        );
    }
}