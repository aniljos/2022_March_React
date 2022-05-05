import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
// state = {
//     name: "",
//     password: ""
// }
// this.setState({});

// const result = useState(""); // result is an array [variable(""), methodTochnagethevariable]
// const name = result[0];
// const setName = result[1];


function Login(){

    //destructuring
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch  = useDispatch<AppDispatch>();
    const location = useLocation();

    console.log("Login", location);

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){
        setName(evt.target.value);
    }

    async function login(){
        console.log("name", name);
        console.log("password", password);

        try {
            const url = "http://localhost:9000/login";
            const response = await axios.post(url, {name, password});
            setMessage("");
            dispatch({
                type: "SET_AUTH",
                payload: {
                    isAuthenticated: true,
                    userName: name,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken
                }
            });

            if(location.state){

                //const to:any = location.state;
                navigate((location.state as any).redirectUrl);
            }
            else{
                navigate("/home");
            }
            
        
        
        } catch (error) {
            setMessage("Invalid Credentials");

            dispatch({
                type: "SET_AUTH",
                payload: {
                    isAuthenticated: false,
                    userName: "",
                    accessToken: "",
                    refreshToken: "",
                }
            });
        }

    }

    return (
        <div>
            <h3>Login</h3>

            {message ?<div className='alert alert-danger'>
                {message}
            </div> : null}
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input className='form-control' id="name" value={name} onChange={handleNameChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='pwd'>Password</label>
                <input className='form-control' id="pwd" type="password" value={password} 
                            onChange={(e) => setPassword(e.target.value) }/>
            </div>
            <br/>
            <div>
                <button className='btn btn-primary' onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;