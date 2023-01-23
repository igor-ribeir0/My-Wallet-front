import { Content } from '../../styles/constants/styledComponents.js';
import { Logo } from '../../styles/constants/styledComponents.js';
import { Input } from '../../styles/constants/styledComponents.js';
import { ConfirmButton } from '../../styles/constants/styledComponents.js';
import logo from '../../assets/imgs/logo.svg';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../providers/auth.js';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setToken}  = React.useContext(AuthContext);
    const { setName } = React.useContext(AuthContext);
    const { setId } = React.useContext(AuthContext);

    function login(event){
        event.preventDefault();

        const promise = axios.post('http://localhost:5000/sign-in', {
            email: email,
            password: password
        });

        promise.then(answer => setToken({token: answer.data.token}));
        promise.then(answer => setName({name: answer.data.name}));
        promise.then(answer => setId({id: answer.data.id}));
        promise.then(() => navigate('/home'));
        promise.catch((error) => alert(`${error.response.data.message}`));
    };

    return(
        <Content>
            <Logo src={logo} />

            <form onSubmit = {login}>
                <Input 
                    type = 'email'
                    placeholder = 'E-mail'
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
                    required
                />

                <Input 
                    type = 'password'
                    placeholder = 'Senha'
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}
                    required
                />

                <ConfirmButton type = 'submit'>
                    <NameButton>Entrar</NameButton>
                </ConfirmButton>
            </form>

            <Link href = '/sign-up'>Primeira vez? Cadastre-se!</Link>
        </Content>
    );
}

const NameButton = styled.span`
    width: 59px;
    height: 23px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
`;

export const Link = styled.a`
    width: 191px;
    height: 18px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    text-decoration: none;
    white-space: nowrap;
`;