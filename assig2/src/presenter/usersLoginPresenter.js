import modelUser from "../model/modelUser";
import modelGuide from "../model/modelGuide";

class UsersLoginPresenter {
    onChangeTourist(property, value) {
        modelUser.changeNewUserProperty(property, value);
    }

    onChangeGuide(property, value) {
        modelGuide.changeNewGuideProperty(property, value);
    }

    onLogin() {
        for (let index = 0; index < modelUser.state.users.length; index++) {
            if (modelUser.state.users[index].username === modelUser.state.currentUser.username) {
                window.location.assign("#/tours-ops-tourist");
            }
        }
        
    }

    onLoginGuide(){
    for (let index = 0; index < modelGuide.state.guides.length; index++) {
        if (modelGuide.state.guides[index].usernameg === modelGuide.state.currentGuide.usernameg) {
            window.location.assign("#/tours-ops-guide");
        }
    }
}
}

const usersLoginPresenter = new UsersLoginPresenter();

export default usersLoginPresenter;

