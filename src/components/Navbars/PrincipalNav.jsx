import React from 'react'
import homeN from '../../assets/homeN.png';
import calendario from '../../assets/calendario.png'
import userN from '../../assets/userN.png'
import styled from 'styled-components';

const Logos = styled.img`
    width: 50px;
    height: 30px;
`
const Nav = styled.div`
    background: #38B6FF;
`

const PrincipalNav = () => {
    return (
        <Nav className="container w-25 py-2">
            <div className="row d-flex justify-content-between">
                <Logos src={homeN} alt="home" />
                <Logos src={calendario} alt="agenda" />
                <Logos src={userN} alt="user" />
            </div>
            
        </Nav>
    )
}

export default PrincipalNav