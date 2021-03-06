import React, {useState} from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) =>{
            //successful in creating a user with email and password
            console.log(auth);
            if(auth) {
                history.push('/');
            }
        })
        .catch((error) => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) =>{
                //successful in creating a user with email and password
                console.log(auth);
                if(auth) {
                    history.push('/');
                }
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              className="login__logo"
            />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />


                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button type='submit' className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
