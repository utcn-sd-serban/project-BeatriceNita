import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const ChooseOpToursTourist = ({ onListTours, onFilterTours }) => (
    <div>
        <h1 class="text bg-success">Where to today, lil explorer?</h1>
        <p>You can choose the operation you wish to perform:</p>
        <div class="d-inline-flex p-3 bg-success text-white">
            <button type="button" class="p-2 bg-secondary" onClick = {onListTours}>List All Tours</button>
            <button type="button" class="p-2 bg-secondary" onClick = {onFilterTours}>Filter Tours</button>
        </div>
    </div>
);

export default ChooseOpToursTourist;