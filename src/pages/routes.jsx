import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import BahanBaku from "./bahan-baku";
import Resep from "./resep-dorayaki";
import Request from "./request";
import Pesanan from "./pesanan";
import Login from "./login";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/daftar-bahan-baku" >
                    { <BahanBaku/>}
                </Route>
                <Route path ="/daftar-resep" >
                    { <Resep/>}
                </Route>
                <Route path ="/daftar-request" >
                    { <Request/>}
                </Route>
                <Route path ="/pesanan-dorayaki" >
                    { <Pesanan/>}
                </Route>
                <Route path ="/home">
                    { <App/>}
                </Route>
                <Route path="/">
                    { <Login/> }
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;