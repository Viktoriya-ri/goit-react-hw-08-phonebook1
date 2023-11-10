import {Wrapper,Contact,Tel,Delete,Container} from "./item.styled"
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/contacts/operations";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
export const ItemContact = ({name,number,id}) => {

  const dispatch = useDispatch();

  const handleContactDelete = id => {

    dispatch(deleteContact(id));
  };

 return (
   
    <Container>
<Wrapper>
  <ContactPhoneIcon color='primary'/>
  <Contact>{name}</Contact>
</Wrapper>
<Wrapper>
<PhoneAndroidIcon color='primary'/>
  <Tel>{number}</Tel>
</Wrapper>
<Delete role="button" aria-label="Delete" onClick={() => handleContactDelete(id)}>

  <AiFillDelete size={20} />
</Delete>
</Container>
)
}

