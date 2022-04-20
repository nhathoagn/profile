import Header from "./compunents/layout/Header";
import React, {useEffect, useState} from "react";
import ShowUsers from "./compunents/Dashboard/ShowUsers";
import Login from "./compunents/Login/Login"
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    Navigate
} from "react-router-dom";

import axios from "axios";
import login from "./compunents/Login/Login";
function App() {

  //   const [state, setState] = useState({
  //       users: []
  //   })
  //   useEffect( () =>{
  //       axios.get("https://my-json-server.typicode.com/nhathoagn/db-profile/db")
  //           .then(res => setState({users: res.data}))
  //   }, []);
  // const  handleButton = (email,password) =>{
  //       setState({
  //           users: this.state.users.map( user =>{
  //               if ( (user.email === email) & (user.password === password)){
  //                   user.isLogin = !user.isLogin;
  //               }
  //             return user;
  //           })
  //       })
  //
  //   }
        const [token, setToken] = useState();
        if (!token){
            return <Login setToken={setToken}/>
        }else {
            <Navigate to="/showusers" state={{ from: login}}/>
        }
        return (
            <div className="login-container">
               <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login setToken={setToken}/>}>
                            <Route path="/showusers" element={<ShowUsers />} />

                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>

        );



}
export default App;