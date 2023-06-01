import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid'
import { Formik, Form, Field } from 'formik';

class ContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;
    const { addContact } = this.props;

    addContact({ id: nanoid(), name, number });
    event.target.reset();
  };


  render() {
    return (
    <Formik 
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
      >
      <Form autoComplete="off" className={css.form}>
      <label className={css.label}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
   
        <label className={css.label}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        <button className={css.btn} type="submit">
          Add contact
        </button>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;