import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneList from './components/PhoneList';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = data => {
    const { contacts } = this.state;
    const addContact = { id: shortid.generate(), name: data.name, numder: data.numder };
    this.setState({ contacts: [...contacts, addContact] });
  };

  render() {
    return (
      <>
        <PhoneForm onSubmit={this.formSubmitHandler}></PhoneForm>
        <PhoneList contacts={this.state.contacts} />
      </>
    );
  }
}
export default App;
