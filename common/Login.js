import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

import {

    Container,
    LoginForm,
    IdLabel,
    PasswordLabel,
    IdInput,
    PasswordInput,
    LoginButton,

} from 'styles/loginStyle'

import { login } from 'util/api'

function Login(props) {

    const router = useRouter() ;

    const [ id, setId ] = useState('') ;
    const [ password, setPassword ] = useState('') ;

    const [ _, setCookies ] = useCookies()

    async function loginButtonOnSubmit(event) {
        event.preventDefault() ;

        const data = await login(JSON.stringify({
            username : id,
            password : password
        })) ;

        const expires = new Date() ;

        expires.setHours(expires.getHours() + 2) ;

        const {
            data : {
                access_token : token
            }
        } = data ;

        setCookies('token', token, {
            expires
        }) ;

        router.push('/profile/write') ;
    }

    function textOnChange(event, setState) {
        const {
            target : {
                value : text
            }
        } = event ;

        setState(text)
    }

    return (
        <Container>
            <LoginForm 
                onSubmit = { loginButtonOnSubmit }
            >
                <IdLabel></IdLabel>
                <IdInput
                    onChange = { e => textOnChange(e, setId) }
                />
                <PasswordLabel></PasswordLabel>
                <PasswordInput
                    onChange = { e => textOnChange(e, setPassword) }
                />
                <LoginButton>Login</LoginButton>
            </LoginForm>
        </Container>
    );
}

export default Login;