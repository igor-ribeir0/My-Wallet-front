import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 147px;
    height: 50px;
    margin-bottom: 24px;
`;

export const Input = styled.input`
    width: 326px;
    height: 58px;
    border-radius: 5px;
    border: none;
    margin-left: 25px;
    margin-right: 24px;
    margin-bottom: 13px;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    &::placeholder{
        padding-left: 10px;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #000000;
    }
`;

export const ConfirmButton = styled.button`
    width: 326px;
    height: 46px;
    border-radius: 5px;
    border: none;
    background-color: #A328D6;
    margin-left: 25px;
    margin-bottom: 32px;
`;

export const Title = styled.h1`
    width: 141px;
    height: 31px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #FFFFFF;
    margin-left: 24px;
    white-space: nowrap;
`;

export const Exit = styled.img`
    width: 23px;
    height: 24px;
    margin-right: 24px;
`;