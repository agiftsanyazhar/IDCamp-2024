import React from "react";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import Header from "./header";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler(title, body) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onSearchHandler(searchQuery) {
    this.setState({ searchQuery });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <div className="note-app">
        <Header
          searchQuery={this.state.searchQuery}
          onSearchHandler={this.onSearchHandler}
        />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={activeNotes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
          />
          <h2>Catatan Diarsipkan</h2>
          <NoteList
            notes={archivedNotes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;
