import { ItemContact } from '../Item';
import { Item, EmptyList,List } from './contactsList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFiltredContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);
  const contacts = useSelector(selectContacts);
  return (
    <>
      <List>
        {contacts.length === 0 && (
          <EmptyList>There aren't contacts yet. Let's add somebody.</EmptyList>
        )}
        {filtredContacts.length === 0 && contacts.length !== 0 && (<EmptyList>There aren't contacts containing this query</EmptyList>)}
        {filtredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <ItemContact name={name} number={number} id={id} />
          </Item>
        ))}
      </List>
    </>
  );
};


