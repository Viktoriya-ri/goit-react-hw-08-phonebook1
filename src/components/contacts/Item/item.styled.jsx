
import styled from "@emotion/styled";

export const Contact = styled.p`

font-size:16px;
font-weight: bold;
flex: 2;
`

export const Tel = Contact.withComponent('number');

export const Wrapper = styled.div`
 
display:flex;
gap:10px;
align-items:center;
flex: 1;
`


export const Delete = styled.div`
  
cursor:pointer;

`

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* Make sure the item takes up the full width */

  }
`;


