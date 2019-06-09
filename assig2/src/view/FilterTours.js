import React from "react";

const FilterTours = ({  onFilteredTours, onChangeToSearch }) => (
    <div>
        <h1 class="text bg-primary">Filter Tours</h1>
        <div>
            <label>Price to search: </label>
            <input onChange={e =>onChangeToSearch("toSearch",e.target.value)} />
            <br />
            <button type="button" class="btn btn-primary" onClick = {onFilteredTours}>Search</button>
        </div>
    </div>
);

export default FilterTours;
