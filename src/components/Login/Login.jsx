import React from "react"
import './Login.css'

const Login = () => {
    return (
        <>
            <div className="container" >
                <div className="container login-container">
                    <div className="user-icon">
                        <img src="" alt="user image" />
                        <h3>Login</h3>
                    </div>
                    <div className="inputs">
                        <input type="email" name="" id="" placeholder="user" />
                        <br />
                        <input type="password" name="" id="" placeholder="password" />
                        <br />
                        <input type="button" value="Entrar" />
                        <p>
                            <a href="#">¿Olvido su contraseña?</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;