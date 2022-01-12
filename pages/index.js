import styles from '../styles/Home.module.css'
import useSWR from 'swr'

import React, { useState } from 'react'

export default function Login() {
    const token = sessionStorage.getItem('token')
    // if (!token) window.location.replace('./login.html')
    console.log(token)

    const API_URL = "https://spl.canggih.dev/api/v1/login";

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const raw = JSON.stringify({
        "email": username,
        "password": password
    });
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const handleSubmit = () => {
        fetch(API_URL, requestOptions)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson)
            const token = responseJson.token
            if (responseJson.success) {
                console.log(token)
                sessionStorage.setItem('username', username)
                sessionStorage.setItem('token', token)
                const checkToken = sessionStorage.getItem('token')
                console.log(checkToken)
                window.location.replace('/dashboard')
            } 
            return responseJson.token
        })
        .catch(error => console.log('error', error))
    }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <form onSubmit={ ( e ) => handleSubmit( e ) } action="" method="post">
                    <div>
                        <label htmlFor="">Email</label><br />
                        <input onInput={ ( e ) => setUsername( e.target.value ) } type="text" id="username" value={ username } />
                    </div>
                    <div>
                        <label htmlFor="">Password</label><br />
                        <input onInput={ ( e ) => setPassword( e.target.value ) } type="password" id="password" value={ password } />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                        {/* <button onClick={login()} type="button" >Get User</button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}