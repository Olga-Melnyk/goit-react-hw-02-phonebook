import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // addContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const newContact = { id: nanoid(), name, number };

  //   contacts.some(contact => contact.name === name)
  //     ? Report.warning(
  //         `${name}`,
  //         'This user is already in the contact list.',
  //         'OK'
  //       )
  //     : this.setState(({ contacts }) => ({
  //         contacts: [newContact, ...contacts],
  //       }));
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
