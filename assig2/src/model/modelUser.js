import { EventEmitter } from "events";

class ModelUser extends EventEmitter {
    constructor() {
        super();
        this.state = {
            users: [{ 
                username:"otto",
                password:"food"
            }],
                currentUser: {
                username: "",
                password: ""
             }
        };
    }

    changeNewUserProperty(property, value) {
        this.state = {
            ...this.state,
            currentUser: {
                ...this.state.currentUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

//singleton
const modelUser = new ModelUser();

export default modelUser;