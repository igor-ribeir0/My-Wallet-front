import { Content } from '../../styles/constants/styledComponents.js';
import { Logo } from '../../styles/constants/styledComponents.js';
import { Input } from '../../styles/constants/styledComponents.js';
import { ConfirmButton } from '../../styles/constants/styledComponents.js';
import logo from '../../assets/imgs/logo.svg';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp(){
    const [name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    function signUp(event){
        event.preventDefault();

        if(confirmPassword !== password){
            return alert('A confirmação de senha deve ser igual a senha!');
        }

        const promise = axios.post('http://localhost:5000/sign-up', {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        });

        promise.then(() => navigate('/'));
        promise.catch(error => alert(`${error.response.data.message}`));
    };

    return(
        <Content>
            <Logo src={logo} />

            <form onSubmit = {signUp}>
            <Input 
                type = 'text'
                placeholder = 'Nome'
                value = {name}
                onChange = {e => setName(e.target.value)}
                required
            />

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

            <Input 
                type = 'password'
                placeholder = 'Confirme a senha'
                value = {confirmPassword}
                onChange = {e => setConfirmPassword(e.target.value)}
                required
            />

            <ConfirmButton type = 'submit'>
                <NameButton>Cadastrar</NameButton>
            </ConfirmButton>
            </form>

            <Link href = '/'>Já tem uma conta? Entre agora!</Link>
        </Content>
    );
}

const NameButton = styled.span`
    width: 94px;
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
    margin-right: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    text-decoration: none;
    white-space: nowrap;
`;