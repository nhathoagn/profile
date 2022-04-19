import Header from "./compunents/layout/Header";
import React, {useEffect, useState} from "react";

import Login from "./compunents/Login/Login";
import axios from "axios";
function App() {
    const [state, setState] = useState({
        users: []
    })
    useEffect( () =>{
        axios.get("https://my-json-server.typicode.com/nhathoagn/db-profile/db")
            .then(res => setState({users: res.data}))
    }, []);
  const  handleButton = (email,password) =>{
        this.state({
            users: this.state.users.map( user =>{
                if ( (user.email === email) & (user.password === password)){
                    user.isLogin = !user.isLogin;
                }
              return user;
            })
        })
    }

        return (
            <div className="login-container">
                <Header/>
                <Login users={state.users}
                    handleButton={handleButton}/>
            </div>
        );



}
export default App;