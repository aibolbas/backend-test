 import React from "react";
 import { useState } from "react";
 import axios from 'axios'
import { email } from "is";

 function Login()  {
    const [values,setValues] = useState({
        name:'',
        email:'',
        password:'',
    })
    const handleInput = (event) => {
        setValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
        console.log(values)
    }
    function Submit(){
        axios.post("http://localhost:3000",values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
    }
    return(
        <div>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input onInput={handleInput} name='name' type='name' placeholder="Please Enter Your Name"></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onInput={handleInput} name='email' type='email' placeholder="Please Enter Your Email"></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onInput={handleInput} name='password' type='password' placeholder="Please Enter Your Password"></input>
                    </div>
                    <button className="btn btn_success">Log in</button>
                    <p></p>
                    <button onClick={Submit} className="btn btn_default border">Create Account</button>
                </form>
            </div>
        </div>
    )
 }
 export default Login