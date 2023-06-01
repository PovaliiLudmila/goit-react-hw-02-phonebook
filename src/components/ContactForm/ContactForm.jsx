import React, { Component } from 'react';
import propTypes from 'prop-types';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid'
import { Formik, Form, Field } from 'formik';

class ContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;
    const { addContact } = this.props;

    this.props.addContact({ id: nanoid(), name, number });
    this.setState({ name: '', number: '' });
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
            placeholder="Enter name"
            required
          />
   
        <label className={css.label}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
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
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default ContactForm;