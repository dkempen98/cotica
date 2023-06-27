import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../style/Form.css'


export default function login() {


    return(
        <div className='page-container'>
            <form action="action_page.php" method="post">
                <div class="form-container">
                    <h1 className='header'>Login</h1>
                    <div className='field-container'>
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required/>
                    </div>
                    <div className='field-container'>
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                    </div>

                    <button type="submit">Login</button>
                    <Link to={'/register'} className='register'>Create an Account</Link>
                </div>

            </form>
        </div>
    )
}