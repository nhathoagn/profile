import Header from "./compunents/layout/Header";
import React, {useEffect, useState} from "react";
import ShowUsers from "./compunents/Dashboard/ShowUsers";
import Login from "./compunents/Login/Login"
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    Navigate, Redirect
} from "react-router-dom";


import login from "./compunents/Login/Login";
function App() {
        const [token, setToken] = useState("");

        return (
            <div className="login-container">
                <Header/>

                <BrowserRouter>
                    <Routes >

                         {token ? <Route path="/show" element={<ShowUsers/>}/> : <Route path="/login" element={<Login setToken={token}/>}/> }

                    </Routes>
                </BrowserRouter>
            </div>

        );



}
export default App;