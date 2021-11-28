import React from "react";
import './login.css';
import baseUrl from "../config";
import cookies from "../cookie";

const Login = () => {
    const loginUrl = baseUrl + '/auth/login';
    const handleLogin = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', loginUrl, false);
        const body = {
            email,
            password,
        };
        const jsonBody = JSON.stringify(body);
        
        xmlhttp.onreadystatechange = () => {
            const msg = JSON.parse(xmlhttp.responseText);
            if(xmlhttp.readyState === 4){
                if(xmlhttp.status === 200){
                    cookies.set('token', msg.data.token, { path: '/' });
                    window.location.reload();

                } else{
                    alert(msg.message);
                }
            }
        }

        xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
        xmlhttp.send(jsonBody);
    }
    return (
        <div className="Login">
            <div className="Login-container">
                <div className="title">Selamat datang di Pabrik Dorayaki</div>
                <div className='text-muted text-center'>
                    Login terlebih dahulu untuk menggunakan factory!
                </div>
                <form className='flex flex-col justify-content-center'>
                    <div className='h6'>Email :</div>
                    <div className='item-center text-center'>
                    <input id="email" className="form-group form-control" placeholder="Email" min="1" required/>
                    </div>
                    <div className='h6'>Password :</div>
                    <div className='item-center text-center'>
                    <input id="password" type="password" className="form-group form-control" placeholder="Password" min="1" required/>
                    </div>
                    <br/>
                    <button type="submit" onClick={handleLogin} className="form-group btn btn-primary col-3 align-self-center">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;