import React from "react";

function Header({ searchQuery, onSearchHandler }) {
  return (
    <header className="note-app__header">
      <h1>Aplikasi Catatan</h1>
      <input
        type="text"
        placeholder="Cari..."
        value={searchQuery}
        onChange={(event) => onSearchHandler(event.target.value)}
      />
    </header>
  );
}

export default Header;
