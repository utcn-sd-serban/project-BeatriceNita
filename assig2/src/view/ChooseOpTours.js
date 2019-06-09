import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const ChooseOpTours = ({ onAddTour, onListTours, onFilterTours }) => (
    <div>
        <h1 class="text bg-warning">Tours Operations</h1>
        <p>You can choose the operation you wish to perform:</p>
        <div class="d-inline-flex p-3 bg-warning text-white">
            <button type="button" class="p-2 bg-primary" onClick = {onAddTour}>Add Tour</button>
            <button type="button" class="p-2 bg-primary" onClick = {onListTours}>List All Tours</button>
            <button type="button" class="p-2 bg-primary" onClick = {onFilterTours}>Filter Tours</button>
        </div>
    </div>
);

export default ChooseOpTours;