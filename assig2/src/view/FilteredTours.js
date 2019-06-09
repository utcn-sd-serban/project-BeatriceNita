import React from "react";

const FilteredTours= ({tours}) => (
    <div>
    <h1 class="text bg-warning">Tours</h1>
    <table class="table table-dark table-striped" border="1">
        <thead>
            <tr>
                <th>Date</th>
                <th>Nr of tourists allowed</th>
                <th>Price</th>
                <th>Guide id</th>
                <th>Location id</th>
            </tr>
        </thead>
        <tbody>
            {
                tours.map((tour, index) => (
                    <tr key={index}>
                        <td>{tour.date}</td>
                        <td>{tour.max_nr_allowed}</td>
                        <td>{tour.price}</td>
                        <td>{tour.guide_id}</td>
                        <td>{tour.location_id}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
</div>
);

export default FilteredTours;