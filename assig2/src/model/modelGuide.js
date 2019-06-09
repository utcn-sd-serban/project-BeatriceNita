import { EventEmitter } from "events";

class ModelGuide extends EventEmitter {
    constructor() {
        super();
        this.state = {
            guides: [{ 
                usernameg:"otto1",
                passwordg:"food1"
            }],
                currentGuide: {
                usernameg: "",
                passwordg: ""
             }
        };
    }

    changeNewGuideProperty(property, value) {
        this.state = {
            ...this.state,
            currentGuide: {
                ...this.state.currentGuide,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

//singleton
const modelGuide = new ModelGuide();

export default modelGuide;