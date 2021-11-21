import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import BahanBaku from "./bahan-baku";
import Resep from "./resep-dorayaki";
import Request from "./request";

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
                <Route path="/">
                    { <App/> }
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;