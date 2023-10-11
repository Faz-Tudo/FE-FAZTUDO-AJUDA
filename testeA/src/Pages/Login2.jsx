import React from "react";
import Navbar from '../Components/Index/Navbar.jsx';
import FomatLogin from '../Components/Login/LoginPage.jsx';
import '../Styles/StylesCadastro/BodyCadastro01.css';
import test from '../Images/Utilitarios/background-tester.png';
function Login2() {
    return (
        <div className="principal-login-background">
            <div className="image-background"></div>
            <div className="body-screen-login">
                <Navbar></Navbar>
                <div className="form-screen-login">
                    <FomatLogin></FomatLogin>
                </div>
            </div>
        </div>

    )
}
export default Login2;