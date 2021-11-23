import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import './login.css';


const Login = () => {
    // let [username, setUsername] = useState("");
    // let [password, setPassword] = useState("");
    // let history = useHistory();

    return (
        <div className="Login">
            <div className="Login-container">
                <div className="title">Selamat datang di Pabrik Dorayaki</div>
                <div className='text-muted text-center'>
                    Login terlebih dahulu untuk menggunakan factory!
                </div>
                <Form>
                    <Form.Group size="lg" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Username"/>
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    />
                    </Form.Group>
                    <Button block size="lg" onClick='/home'>
                        <Link to="/home">
                            Login
                        </Link>
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;