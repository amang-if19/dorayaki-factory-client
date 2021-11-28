import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import BahanBaku from "./bahan-baku";
import Resep from "./resep-dorayaki";
import ResepDetail from "./resep-detail";
import Request from "./request";
import Login from "./login";
import CreateBahanBaku from "./create-bahan-baku";
import CreateResep from "./create-resep";
import EditBahanBaku from "./edit-bahan-baku";
import cookies from "../cookie";

const Routes = () => {
    const checkCookies = () => {
        if (cookies.get('token')) {
            return true;
        }

        return false;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/daftar-bahan-baku" >
                    { checkCookies() ? <BahanBaku/> : <Redirect to='/'/> }
                </Route>
                <Route path ="/create-bahan-baku">
                    { checkCookies() ? <CreateBahanBaku/> : <Redirect to='/'/> }
                </Route>
                <Route path ="/edit-bahan-baku/:id">
                    { checkCookies() ? <EditBahanBaku/> : <Redirect to='/'/> }
                </Route>
                <Route path ="/daftar-resep" >
                    { checkCookies() ? <Resep/> : <Redirect to='/'/> }
                </Route>
                <Route path ="/resep-detail/:id">
                    { checkCookies() ? <ResepDetail/> : <Redirect to='/'/> }
                </Route>
                <Route path ="/create-resep">
                    { checkCookies() ? <CreateResep/> : <Redirect to='/'/> }
                </Route>
                <Route path ="/daftar-request" >
                    { checkCookies() ? <Request/> : <Redirect to='/'/>}
                </Route>
                <Route path ="/home">
                    { checkCookies() ? <App/> : <Redirect to='/'/> }
                </Route>
                <Route path="/">
                    { checkCookies() ? <Redirect to='/home'/> : <Login/> }
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
