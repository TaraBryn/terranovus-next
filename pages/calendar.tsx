import React from 'react';
import styled from 'styled-components';
import { InlineWidget } from 'react-calendly';

const CalendlySpacer = styled.div`
    width: 100%;
    height: 0;

    @media screen and (max-width: 720px) {
        height: 85px;
    }
`

const Calendly = () => (
    <>
        <CalendlySpacer />
        <InlineWidget 
            url='https://calendly.com/tarabryn'
            pageSettings={{backgroundColor: '2f2f2f'}}
            styles={{height: '650px', maxWidth: '90vw', margin: 'auto'}}
        />
    </>
)

export default Calendly;