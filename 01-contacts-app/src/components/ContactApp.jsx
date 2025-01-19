import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

// function ContactApp() {
//   const contacts = getData();

//   return (
//     <div className="contact-app">
//       <h1>Daftar Kontak</h1>
//       <ContactList contacts={contacts} />
//     </div>
//   );
// }

// export default ContactApp;

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    };

    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onDeleteContactHandler = this.onDeleteContactHandler.bind(this);
  }

  onAddContactHandler({ name, username }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            username,
            imageUrl: "images/default.jpg",
          },
        ],
      };
    });
  }

  onDeleteContactHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h1>Daftar Kontak</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteContactHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
