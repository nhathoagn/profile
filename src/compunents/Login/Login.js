import React,{useState} from "react";
import ReactDOM from "react-dom";
import {Container} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import axios from "axios";

async function loginUser(credentials) {
    return (await axios.post('http://localhost:9000/login', credentials)).data;
}
function Login({setToken})  {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();
    const handleButton = async (e) => {
      e.preventDefault();
      const response =  await  loginUser({
          email,
          password
      });
     setToken(response.token)
        console.log(response.token)
        navigate("/user")
    }
       return(
           <Container className="login-container">
               <Form onSubmit={handleButton}>
                   <Form.Label id="login-label">Login</Form.Label>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email"  placeholder="Enter email"  onChange={ e => setEmail(e.target.value)}/>
                       <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                       </Form.Text>
                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                   </Form.Group>

                   <Button variant="primary" type="submit" >
                       Login
                   </Button>
               </Form>
           </Container>
       )



}

export default Login;