import { useState } from 'react'
import './styling.css'


export default function signIn() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    //Backend logic here

    function validate(){
        if(password.length < 6){
            alert("Please enter a valid password" + ` ${password.length}`);
        }
        if(username.trim === ""){
            alert("Please enter a valid username");
        }
        //Backend logic here
    }

    return(
        <div class="parent">
            <div class='title-container'>
                <label>Login</label>
            </div>
            <div class="input-username"> 
                <label>Username:</label>
                <input
                type='text'
                style={{
                    backgroundColor: "#FF8408",
                    color: "#00FF37"
                }}
                onChange={() => {setUsername}}/>
            </div>
            <div class='input-username'>
                <label>Password:</label>
                <input
                style={{
                    backgroundColor: "#00FF37",
                    color: "#FF8408"
                }}
                type='password'
                onChange={setPassword}/>
            </div>

            <button
            style={{
                backgroundColor: "#CD04FF"
            }}
            onClick={validate}
            >Login</button>
        </div>
    )
}