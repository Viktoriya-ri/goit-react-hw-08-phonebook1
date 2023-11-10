import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';
import { TextField, Button } from '@mui/material';
const schema = yup.object().shape({
  name: yup.string().min(3).max(32).required(),

  number: yup.string().min(3).max(14).required(),
});

export const Input = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
      ) {
      
        return Notiflix.Notify.failure(`${values.name} is already in contacts`);
      }
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} style={{ marginBottom: '10px' }}>
  
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mb: 2, height:'78px' }}
        />
        <TextField
          fullWidth
          id="number"
          name="number"
          label="Number"
          type="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          sx={{ mb: 2,height:'78px' }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );
};
