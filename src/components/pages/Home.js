import { Content } from '../../styles/constants/styledComponents.js';
import { Title } from '../../styles/constants/styledComponents.js';
import { Exit } from '../../styles/constants/styledComponents.js';
import plus from '../../assets/imgs/plus.png';
import less from '../../assets/imgs/less.png';
import exit from '../../assets/imgs/exit.svg';
import styled from 'styled-components';
import {AuthContext} from '../providers/auth.js';
import React, { useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home(){
    const { name } = React.useContext(AuthContext);
    const { id } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const [arrayEntry, setArrayEntry] = useState([]);
    const [arrayOut, setArrayOut] = useState([]);
    const [haveRegister, setHaveRegister] = useState(false);
    const [entryCounter, setEntryCounter] = useState(0);
    const [outCounter, setOutCounter] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);
    const validationBalance = totalBalance;
    const _id = id.id


    useEffect(() => {
        const promise = axios.get('http://localhost:5000/registers', _id);

        promise.then(answer => checkRegister(answer.data));
        promise.catch(error => alert(`${error.response.data.message}`));
    }, []);

    function checkRegister(answer){
        if(answer.length !== 0){
            setHaveRegister(true);
        }
        answer.map((register) => {
            if(register.type === 'entry'){
                setArrayEntry([...arrayEntry, register]);
            }
            else{
                setArrayOut([...arrayOut, register]);
            }
        })
    };

    return(
        <Content>
            <Header>
                <Title>Olá, {name.name}</Title>
                <Exit src = {exit} onClick = {() => navigate('/')}/>
            </Header>

            <RegisterBox>
                <RegisterData validation = {haveRegister}>
                    <p>Não há registros de entrada ou saída</p>

                    <EntryBox validation = {haveRegister}>

                        <EntryDateBox>
                            {arrayEntry.map((register) => {
                                <Date>{register.date}</Date>
                            })}
                        </EntryDateBox>

                        <EntryDescriptionBox>
                            {arrayEntry.map((register) => {
                                <p>{register.description}</p>
                            })}
                        </EntryDescriptionBox>

                        <EntryPriceBox>
                            {arrayEntry.map((register) => {
                                <p>{register.price}</p>
                                setEntryCounter(entryCounter + Number(register.price));
                                setTotalBalance(entryCounter - outCounter);
                            })}
                        </EntryPriceBox>

                    </EntryBox>

                    <OutBox validation = {haveRegister}>

                        <OutDateBox>
                            {arrayOut.map(register => 
                                <p>{register.date}</p>
                            )}
                        </OutDateBox>

                        <OutDescriptionBox>
                            {arrayOut.map(register => 
                                <p>{register.description}</p>
                            )}
                        </OutDescriptionBox>

                        <OutPriceBox>
                            {arrayOut.map((register) => {
                                <p>{register.price}</p>
                                setOutCounter(outCounter + Number(register.price));
                                setTotalBalance(entryCounter - outCounter);
                            })}
                        </OutPriceBox>

                    </OutBox>

                    <BalanceBox validationBalance = {validationBalance}>
                        <p>SALDO</p>
                        <span>{totalBalance}</span>
                    </BalanceBox>

                </RegisterData>
            </RegisterBox>

            <EntryOutBox>
                <Button onClick = {() => navigate('/nova-entrada')}>
                    <img src = {plus} />
                    <p>Nova entrada</p>
                </Button>

                <Button onClick = {() => navigate('/nova-saida')}>
                    <img src = {less} />
                    <p>Nova saída</p>
                </Button>
            </EntryOutBox>
        </Content>
    );
}

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
`;

const RegisterBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 13px;
`;

const RegisterData = styled.div`
    width: 326px;
    height: 446px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction:${props => props.validation? 'column' : 'row'};
    justify-content: center;
    align-items: center;
        p{
            width: 180px;
            height: 46px;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #868686;
            display:${props => props.validation? 'none' : 'flex'};
        }
`;

const EntryOutBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5px;
    border: none;
    margin-right: auto;
    margin-left: 24px;
        p{
            width: 180px;
            height: 46px;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 23px;
            color: #FFFFFF;
            margin-top: 70px;
            margin-left: -30px;
        }
        img{
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 10px;
            margin-left: 10px;
        }
`;

const EntryBox = styled.div`
    width: 100%;
    display:${props => props.validation? 'flex' : 'none'};
    justify-content: space-around;
    align-items: center;
`;

const EntryDateBox = styled.div`
    width: 33.3333%;
    display: flex;
    flex-direction: column;
`;

const Date = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`;

const EntryDescriptionBox = styled.div`
    width: 33.3333%;
    display: flex;
    flex-direction: column;
        p{
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
        }
`;

const EntryPriceBox = styled.div`
    width: 33.3333%;
    display: flex;
    flex-direction: column;
        p{
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #03AC00;
        }
`;

const OutBox = styled.div`
    width: 100%;
    display:${props => props.validation? 'flex' : 'none'};
    justify-content: space-around;
    align-items: center;
`;

const OutDateBox = styled.div`
    width: 33.3333%;
    display: flex;
    flex-direction: column;
        p{
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #C6C6C6;
        }
`;

const OutDescriptionBox = styled.div`
    width: 33.3333%;
    display: flex;
    flex-direction: column;
        p{
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
        }
`;

const OutPriceBox = styled.div`
    width: 33.3333%;
    display: flex;
    flex-direction: column;
        p{
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #C70000;
        }
`;

const BalanceBox = styled.div`
    width: 100%;
    display: ${props => props.validation? 'flex' : 'none'};
    justify-content: space-between;
    align-items: center;
        p{
            width: 57px;
            height: 20px;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #000000;
        }
        span{
            width: 63px;
            height: 20px;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;
            color: ${props => props.validationBalance < 0? 'red' : 'green'};
        }
`;