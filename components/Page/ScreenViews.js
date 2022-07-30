import styled from "styled-components"
import { breakpointMobile, breakpointMobileUp } from "./constants";

export const WideScreenView = styled.span`
  @media (max-width: ${breakpointMobile}) { display:none; }
`;

export const SmallScreenView = styled.span`
  @media (min-width: ${breakpointMobileUp}) { display:none; }
`;
