//Media Queries targeting entire components

import styled from "styled-components";
import { device } from "../device";

const SclMedia = styled.div`
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    padding: 2px !important;
    margin: 7px 4px;
    color: #39a7aa;
    border-radius: 4rem;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  }

  @media ${device.mobiles} {
    /* background: green; */
  }
  @media ${device.mobileL} {
    /* background: yellow; */
  }
`;

export default SclMedia;
