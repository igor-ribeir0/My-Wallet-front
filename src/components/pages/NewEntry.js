import { Content } from '../../styles/constants/styledComponents.js';
import { Title } from '../../styles/constants/styledComponents.js';
import { Input } from '../../styles/constants/styledComponents.js';
import { ConfirmButton } from '../../styles/constants/styledComponents.js';
import React, { useState } from 'react';
import styled from 'styled-components';
import {AuthContext} from '../providers/auth.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewEntry(){
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const { id } = React.useContext(AuthContext);
    const { token } = React.useContext(AuthContext);
    const navigate = useNavigate();

    function saveEntry(event){
        event.preventDefault();

        const config = {
            headers: {
                "Authorization": `Bearer ${token.token}`
            }
        };

        const promise = axios.post('http://localhost:5000/registerEntryOut', config,
            {
                price: price,
                description: description,
                id: id.id
            }
        );

        promise.then(() => navigate('/home'));
        promise.catch(error => alert(`${error.response.data.message}`));
    };

    return(
        <Content>
            <Header>
                <Title>Nova Entrada</Title>
            </Header>

            <form onSubmit = {saveEntry}>
                <Input 
                    type = 'text'
                    placeholder = 'Valor'
                    value = {price}
                    onChange = {e => setPrice(e.target.value)}
                    required
                />

                <Input 
                    type = 'text'
                    placeholder = 'Descrição'
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}
                    required
                />

                <ConfirmButton type = 'submit'>
                    <NameButton>Salvar entrada</NameButton>
                </ConfirmButton>
            </form>
        </Content>
    );
}

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;

const NameButton = styled.span`
    width: 59px;
    height: 23px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
`;