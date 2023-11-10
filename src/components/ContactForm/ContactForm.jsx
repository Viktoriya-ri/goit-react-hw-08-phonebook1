import React, { useState } from 'react';
import { FormWrap, Form, Text, FormInput, FormBtn, FormLabel} from './ContactForm.styled'

const ContactForm = ({onAddContact}) => {

const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
  })
  const handleInputChange = evt => {

    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
      evt.preventDefault();
      const { name, phone} = dataForm;

      const newContact = {

        name: name,
        phone: phone,

      }

      onAddContact(newContact)

      setDataForm({
        name: '',
        phone: '',
      });

  };



    return (
      <FormWrap>
        <Form onSubmit={handleSubmit}>
          <FormLabel>
            <Text>Name</Text>
            <FormInput
              onChange={handleInputChange}
              type="text"
              placeholder="Enter name"

              name="name"
              value={dataForm.name}
              required
            />
          </FormLabel>
          <label>
            <Text>Number</Text>
            <FormInput
              onChange={handleInputChange}
              type="tel"
              placeholder="Enter phone number"

              name="phone"
              value={dataForm.phone}
              required
            />
          </label>

          <FormBtn type="submit">Add contact</FormBtn>
        </Form>
      </FormWrap>
    );

}

export default ContactForm
