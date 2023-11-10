
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'components/input';
import { Title} from 'components/contacts/Titles';
import { Filter } from 'components/contacts/filter';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { ContactsList } from 'components/contacts/contactsList';
import { fetchContacts } from 'redux/contacts';


const Contacts = () => {

      const dispatch = useDispatch();
      const isLoading = useSelector(selectLoading);
      const error = useSelector(selectError);

      useEffect(() => {
   
        dispatch(fetchContacts())

      },[dispatch])

    return (
        
        <>
      <Title/>     
      <Input/>
      <Filter />
      {isLoading && <p>Loading contacts...</p> }
      {error && <p>{error}</p>}
      <ContactsList/>
        </>
    )
}

export default Contacts;

