import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink) `
    
color:inherit; 
 text-decoration:none;
 margin-right:20px;
 font-size:20px;

 &.active {

   font-size: 22px;
   font-weight: 600;
 }
`