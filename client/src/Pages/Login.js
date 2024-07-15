import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils';
import { Link } from 'react-router-dom'
import '../style/Form.css'

export default function Login(props) {

    const [formState, setFormState] = useState({ 
        email: '', 
        password: '' 
    })

    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
    }
 // clear form values on component unmount rather than click handler
  useEffect(() => {
    return () => {
        setFormState({
            email: '',
            password: '',
          });
    }
  },[]) 

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
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password" 
                            onChange={handleChange} 
                            required
                        />
                    </div>

                    <button type="submit" onClick={handleFormSubmit}>Login</button>
                    <Link to={'/register'} className='register'>Create an Account</Link>
                </div>

            </form>
        </div>
    )
}