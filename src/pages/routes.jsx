import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import request from "./request";
import App from "./App";
import BahanBaku from "./bahan-baku";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/" >
                    { <BahanBaku/>}
                </Route>
                <Route path="/daftar-request">
                    { <request /> }
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;