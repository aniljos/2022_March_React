import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
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
            navigate("/products");


        } catch (error) {
            setMessage("Invalid Credentials");
        }

    }

    return (
        <div>
            <h3>Login</h3>

            <div className='alert alert-danger'>
                {message}
            </div>
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