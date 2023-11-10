import styled from "styled-components";

export const MainTitle = styled.h1`
position:relative;
  font-size: 44px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  padding-bottom: 13px;

  &:before {
    background-color: #1976D2;
    content: '';
    display: block;
    height: 3px;
    width: 75px;
    margin-bottom: 5px;
  }

  &:after {
    background-color: #1976D2;
    content: '';
    display: block;
  position:absolute; right:0; bottom:0;
    height: 3px;
    width: 75px;
    margin-bottom: 0.25em;
  }
`;

export const Span = styled.span`

 color:  #1976D2;

`
