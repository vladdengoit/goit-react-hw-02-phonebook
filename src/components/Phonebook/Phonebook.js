import { Component } from 'react';
import {
  Phonetitle,
  Formstyle,
  LabelInput,
  Inputname,
  Inputtitle,
  Buttoninput,
} from '../Phonebook/Phonebook.styled';

class Phonebook extends Component {
  // state = {
  //   textInput: '',
  //   telInput: '',
  // };

  // handlerChangetel = event => {
  //   this.setState({ telInput: event.currentTarget.value });
  // };
  // handlerhangeChange = event => {
  //   this.setState({ textInput: event.currentTarget.value });
  // };
  handlerAddname = event => {
    event.preventDefault();
    this.props.addContactprops(
      event.currentTarget.elements.name.value,
      event.currentTarget.elements.number.value
    );
    // this.setState({ textInput: '', telInput: '' });
    event.target.reset();
  };
  render() {
    return (
      <>
        <Phonetitle>Phonebook</Phonetitle>
        <Formstyle onSubmit={this.handlerAddname}>
          <Inputtitle>Name :</Inputtitle>
          <LabelInput>
            <Inputname
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // onChange={this.handlerhangeChange}
            ></Inputname>
          </LabelInput>
          <Inputtitle>Phone number :</Inputtitle>
          <LabelInput>
            <Inputname
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // onChange={this.handlerChangetel}
            >
              {}
            </Inputname>
          </LabelInput>
          <Buttoninput type="submit">ADD CONTACT</Buttoninput>
        </Formstyle>
      </>
    );
  }
}
export default Phonebook;
