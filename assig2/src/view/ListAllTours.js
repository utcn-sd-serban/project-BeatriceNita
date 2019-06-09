import React from "react";

const ListAllTours = ({ tours,onDeleteTour }) => (
    <div>
        <h1 class="text bg-warning">Tours</h1>
        <table class="table table-dark table-striped" border="1">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Number of tourists allowed</th>
                    <th>Price</th>
                    <th>Guide id</th>
                    <th>Location id</th>
                    <th></th>
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
                        <td><button type="button" class="btn btn-warning" onClick = {onDeleteTour(index)}>Delete</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
);

export default ListAllTours;