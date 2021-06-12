import React from 'react';
import Logo from "../../../src/avatar.png";
import styled from 'styled-components';

export default function LogoAnimation() {

    return (
        <AniLogo>
            <img src={Logo} alt="logo" />
        </AniLogo>
    );
}

const AniLogo = styled.div`
    display: inline-block;
    width: auto;
    height: 172px;
    img {
        width: auto;
        height: 92%;
        user-select: none;
    }
`;