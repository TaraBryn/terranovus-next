import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import hexRgb from 'hex-rgb';
import logo from '../media/TerraNovus_logo_01_REDROSES.png';

const FormContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: ${({theme}) => (
        `linear-gradient(
            180deg,
            ${theme.colors.primary} 0%,
            ${theme.colors.darkShade} 100%
        )`
    )};
`

const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: ${({theme}) => theme.colors.contrast};
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

const IconImg = styled.img`
    max-width: 150px;
`

const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

const Form = styled.form`
    background: ${({theme}) => theme.colors.highlight};
    max-width: 480px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`

const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: ${({theme}) => theme.colors.darkShade || theme.colors.contrast};
    font-size: 20px;
    font-weight: 400px;
    text-align: center;
`

const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: ${({theme}) => theme.colors.contrast};
`

const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

const FormButton = styled.button`
    background: ${({theme}) => theme.colors.highlight};
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: ${({theme}) => theme.colors.contrast};
    font-size: 20px;
    cursor: pointer;
`

const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: ${({theme: {colors}}) => colors.highlight};
`

const Signin = () => {
    return (
        <FormContainer>
            <Icon href='/'>
                <IconImg src={logo.src} />
            </Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormContainer>
    )
}

export default Signin;