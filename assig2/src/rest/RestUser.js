const BASE_URL = "http://localhost:8080";

export default class RestUser {
    constructor(usernameg, passwordg) {
        this.authorization = "Basic " + btoa(usernameg + ":" + passwordg);
    }

    loadAllTours() {
        return fetch(BASE_URL + "/tours", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }
    createTour(date,max_nr_allowed,price,guide_id,location_id) {
        return fetch(BASE_URL + "/tours", {
            method: "POST",
            body: JSON.stringify({
                id:null,
                date: date,
                max_nr_allowed: max_nr_allowed,
                price: price,
                guide_id: guide_id,
                location_id: location_id
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }
    deleteTour(id) {
        return fetch(BASE_URL + "/tours/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    loadToursByPrice(price) {
        return fetch(BASE_URL + "/tours?price=" + price, {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }
}