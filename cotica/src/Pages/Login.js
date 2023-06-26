import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
import '../style/Form.css'


export default function login() {


    return(
        <div>
            <h1>Login</h1>

            <form action="action_page.php" method="post">
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button type="submit">Login</button>
                </div>

            </form>
        </div>
    )
}