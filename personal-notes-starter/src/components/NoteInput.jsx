import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      charLimit: 50,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    const input = event.target.value;
    if (input.length <= this.state.charLimit) {
      this.setState(() => {
        return { title: input };
      });
    }
  }

  handleBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.addNote(title, body);
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.handleSubmit}>
        <h2>Tambah Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.charLimit - this.state.title.length}
        </p>
        <input
          type="text"
          placeholder="Judul"
          value={this.state.title}
          onChange={this.handleTitleChange}
          required
        />
        <textarea
          placeholder="Deskripsi"
          value={this.state.body}
          onChange={this.handleBodyChange}
          required
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NoteInput;
