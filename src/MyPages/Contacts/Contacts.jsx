import Form from '../../components/Form/Form';

import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Container } from './Contacts.styled';
const { useEffect } = require('react');
const { useDispatch } = require('react-redux');
const { getContactsThunk } = require('redux/contactsThunk');

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <Container>
      <Form />
      <div>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
};

export default Contacts;
