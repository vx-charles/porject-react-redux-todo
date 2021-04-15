import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    font-family: arial, sans-serif;
    margin-bottom: 30px;
    
    h2 {
        font-weight: 600;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
    }

    small {
        color: #666;
    }
`;

const pageHeader = props => (
    <Header className='page-header'>
        <h2>{props.name} <small>{props.small}</small></h2>
    </Header>
)

export default pageHeader