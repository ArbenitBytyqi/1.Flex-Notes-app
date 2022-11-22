import React from "react";
import { useEffect, useState } from "react";

export function SearchBar() {
  const [notes, setNotes] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const notesTitle = form.search.value;

    if (notesTitle) {
      fetch(`http://localhost:5500/notes/note/${notesTitle}`)
        .then((resp) => resp.json())
        .then((notesFromServer) => setNotes(notesFromServer));
    } else {
      fetch("http://localhost:5000/notes")
        .then((resp) => resp.json())
        .then((notesFromServer) => setNotes(notesFromServer));
    }
  }

  return (
    <div>
      <form className="search-bar" onChange={(event) => handleSubmit(event)}>
        <input
          className="blog-search-input"
          name="search"
          type="text"
          placeholder="Search your notes..."
        ></input>
        <button className="blog-search-btn">Search</button>
      </form>
    </div>
  );
}
