import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

const Login = ({ username, password, usernameg, passwordg, onLogin, onLoginGuide, onChangeTourist, onChangeGuide }) => (
    <div class="panel-group">
        <h1>Welcome to Tours and Travels!</h1>
        <p class="text-success">You have to Login first!</p> 
            <div class="panel panel-success">
                <label>Username: </label>
                <input value={username} onChange={ e => onChangeTourist("username", e.target.value)} />
                <br />
                <label>Password: </label>
                <input value={password} onChange={ e => onChangeTourist("password", e.target.value)} />
                <br />
                <button type="button" class="btn btn-success" onClick={onLogin}>Login as Tourist</button>
                <br />
            </div>
            
            <div class="panel panel-warning">
            <br />
                <label>Username: </label>
                <input value={usernameg} onChange={ e => onChangeGuide("usernameg", e.target.value)} />
                <br />
                <label>Password: </label>
                <input value={passwordg} onChange={ e => onChangeGuide("passwordg", e.target.value)} />
                <br />
                <button type="button" class="btn btn-warning" onClick={onLoginGuide}>Login as Guide</button>
            </div>
    </div>
);

export default Login;
