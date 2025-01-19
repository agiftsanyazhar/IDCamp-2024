import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onUsernameChangeEventHandler =
      this.onUsernameChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onUsernameChangeEventHandler(event) {
    this.setState(() => {
      return {
        username: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          onChange={this.onNameChangeEventHandler}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={this.onUsernameChangeEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
