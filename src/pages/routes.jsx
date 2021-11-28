import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import BahanBaku from "./bahan-baku";
import Resep from "./resep-dorayaki";
import ResepDetail from "./resep-detail";
import Request from "./request";
import Login from "./login";
import CreateBahanBaku from "./create-bahan-baku";
import CreateResep from "./create-resep";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/daftar-bahan-baku" >
                    { <BahanBaku/>}
                </Route>
                <Route path ="/create-bahan-baku">
                    { <CreateBahanBaku/> }
                </Route>
                <Route path ="/daftar-resep" >
                    { <Resep/>}
                </Route>
                <Route path ="/resep-detail/:id">
                    { <ResepDetail/> }
                </Route>
                <Route path ="/create-resep">
                    { <CreateResep/> }
                </Route>
                <Route path ="/daftar-request" >
                    { <Request/>}
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
