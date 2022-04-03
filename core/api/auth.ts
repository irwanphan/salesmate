import axios from 'axios'
import Error from 'next/error';

export interface LoginRequest {
    email: string
    password: string
}

export const login = async ( {email, password} : LoginRequest ) : Promise<any> => {
    try {
        const API_URL = "https://spl.canggih.dev/api/v1/";

        const headers = {
            "Content-Type" : `multipart/form-data`
        };

        let data = new FormData();
        data.append( 'email', email );
        data.append( 'password', password );

        let result = await axios( {
            method:'post',
            url: 'login',
            baseURL: API_URL,
            data: data,
            headers: headers,
        } );

        let response = result.data;
        return response
    } catch(error: any) {
        throw new Error(error)
    }
    
}

export const authService = {login}