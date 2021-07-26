import React from "react";
import Logo from "../../images/crest_trans_brown.png";
import styled from "styled-components";
import { device } from "../MediaQuery/device";

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
  height: 310px;
  border-radius: 1rem;
  @media ${device.mobileM} {
    height: 355px;
  }
  @media ${device.tablet} {
    height: 465px;
  }
  @media ${device.laptop} {
    height: 355px;
  }
  @media ${device.laptopL} {
    height: 450px;
  }

  img {
    width: auto;
    height: 100%;
    z-index: 0;
    user-select: none;
  }
`;
