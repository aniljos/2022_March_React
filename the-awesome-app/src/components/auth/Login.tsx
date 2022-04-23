import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
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

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){
        setName(evt.target.value);
    }

    async function login(){
        console.log("name", name);
        console.log("password", password);

        try {
            const url = "http://localhost:9000/login";
            const response = await axios.post(url, {name, password});
            setMessage("Authenticated Successfully");

        } catch (error) {
            setMessage("Invalid Credentials");
        }

    }

    return (
        <div>
            <h3>Login</h3>

            <div>
                {message}
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <input id="name" value={name} onChange={handleNameChange}/>
            </div>
            <div>
                <label htmlFor='pwd'>Password</label>
                <input id="pwd" type="password" value={password} 
                            onChange={(e) => setPassword(e.target.value) }/>
            </div>
            <div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;