import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import axios from 'axios'
import { authService, LoginRequest } from '../core/api/auth';
import { redirect } from 'next/dist/server/api-utils';
import router from 'next/router';

export default function Login() {
    let [ request, setRequest ] = useState<LoginRequest>({
        email: '',
        password: ''
    });

    const handleSubmit = async ( e:any ) => {
        e.preventDefault();
        authService.login( request )
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                // console.log('token : ', localStorage.getItem("token"))
                router.replace('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onChange = (e:any) => {
        setRequest({
            ...request,
            [e.target.name]: e.target.value
        })
        // console.log(request)
    }

    return (
        <div className={styles.container}>
            <div className={styles['m-inner']}>
                <form onSubmit={ ( e ) => handleSubmit( e ) } action="" method="post">
                    <div>
                        <label htmlFor="">Username</label><br />
                        <input 
                            onChange={onChange} 
                            type="text" 
                            name="email" 
                            defaultValue={request.email} />
                    </div>
                    <div>
                        <label htmlFor="">Password</label><br />
                        <input
                            onChange={onChange} 
                            type="password" 
                            name="password" 
                            value={ request.password } 
                        />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}