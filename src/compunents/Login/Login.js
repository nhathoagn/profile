import React,{useState} from "react";
import ReactDOM from "react-dom";
import {Container} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = e =>{
        this.setState({
            email: e.target.value,
            password: e.target.value
        })

    };


   render() {
       return(
           <Container className="login-container">
               <Form>
                   <Form.Label id="login-label">Login</Form.Label>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" placeholder="Enter email"  onChange={this.handleChange}/>
                       <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                       </Form.Text>
                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                   </Form.Group>

                   <Button variant="primary" type="submit" onClick={ () => this.props.handleButton(this.state.email,this.state.password)}>
                       Login
                   </Button>
               </Form>
           </Container>
       )
   }


}
export default Login;