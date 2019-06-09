import React, { Component } from "react";
import model from "../model/model";
import FilteredTours from "./FilteredTours";

const mapModelStateToComponentState = modelState => ({
    searchTours:modelState.searchTours
});

export default class SmartFilteredTours extends Component {
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
            <FilteredTours
            tours={this.state.searchTours}/>
        );
    }
}