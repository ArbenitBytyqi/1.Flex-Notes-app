import { SetStateAction, useEffect, useState } from "react";
import { Notes } from "../utilis";

type Props = {
  notes: any;
  setNotes: React.Dispatch<SetStateAction<Notes[]>>;
};

export function SearchBar({ notes, setNotes }: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const noteTitle = form.search.value;

    if (noteTitle) {
      fetch(`http://localhost:5500/notes/note/${noteTitle}`)
        .then((resp) => resp.json())
        .then((notesFromServer) => setNotes(notesFromServer));
    } else {
      fetch("http://localhost:5500/notes")
        .then((resp) => resp.json())
        .then((notesFromServer) => setNotes(notesFromServer));
    }
  }

  return (
    <div className="notes-search">
      <form
        className="note-search-form"
        onChange={(event) => handleSubmit(event)}
      >
        <input
          className="note-search-input"
          name="search"
          type="text"
          placeholder="Search you notes?"
        ></input>
        <button className="note-search-btn">Search</button>
      </form>
    </div>
  );
}
