import React from "react";
class Class  extends React.Component{

    render() {
        return (
            <div>
                <ul>
                    {this.props.users.map(user =>{
                        <li key={user.id}>{user.name}</li>
                    })}
                </ul>
            </div>
        );
    }

}