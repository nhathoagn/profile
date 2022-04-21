import React from "react";
import ReactDOM from "react-dom";
class Header  extends  React.Component{
    render() {
        return(
            <header className="header-container">
                <h1 className="header-title">Profile Project</h1>
                <a href="/login">loginnnn</a>
            </header>
        );
    }
}
export default Header;