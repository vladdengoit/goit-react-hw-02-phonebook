import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import { Contact } from '../components/Contact/Contact';
import { nanoid } from 'nanoid';
import { Filter } from '../components/Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  handlerFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addContact = (name, phone) => {
    const checkname = this.state.contacts.find(el => el.name === name);
    console.log(checkname);
    if (checkname && checkname.name === name) {
      alert(`${name} is already in the list of contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, phone, id: nanoid()}],
    }));
  };
  handlerDelete = idDel => {
    console.log(idDel);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== idDel),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFiltervalue = filter.toLowerCase();
    const makeFilter = contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFiltervalue)
    );
    // const makeFilter = this.filtrByName();
    return (
      <div>
        React homework template
        <Phonebook addContactprops={this.addContact} />
        <Filter propsOnChange={this.handlerFilterChange} />
        <Contact contacArray={makeFilter} clickByDelete={this.handlerDelete} />
      </div>
    );
  }
}
