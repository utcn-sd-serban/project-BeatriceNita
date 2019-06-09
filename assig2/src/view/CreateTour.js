import React from "react";

const CreateTour = ({ date,max_nr_allowed,price,guide_id,location_id, onCreateTour, onChange }) => (
    <div>
        <h1 class="text bg-info">Add Tour</h1>
        <p class="text-info">Fill in the requested info</p>
        <div>
            <label>Date: </label>
            <input value={date} onChange={ e => onChange("date", e.target.value)} />
            <br />
            <label>Max nr allowed: </label>
            <input value={max_nr_allowed} onChange={ e => onChange("max_nr_allowed", e.target.value)} />
            <br />
            <label>Price: </label>
            <input value={price} onChange={ e => onChange("price", e.target.value)} />
            <br />
            <label>Guide id: </label>
            <input value={guide_id} onChange={ e => onChange("guide_id", e.target.value)} />
            <br />
            <label>Location id: </label>
            <input value={location_id} onChange={ e => onChange("location_id", e.target.value)} />
            <br />
            <button type="button" class="btn btn-info" onClick = {onCreateTour}>Create!</button>
        </div>
    </div>
);

export default CreateTour;
