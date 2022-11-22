import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "../App.css";
import { PostForm } from "../components/PostForm";

function Fun() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5500/notes/Fun`)
      .then((resp) => resp.json())
      .then((notesFromServer) => setNotes(notesFromServer));
  }, []);

  return (
    <div className="App">
      <header>
        <h2>My Notes App</h2>
        <div className="search-bar">
          <input placeholder="Search your notes"></input>
          <button>Search</button>
        </div>
      </header>
      <div className="note-content">
        <div className="sidebar">
          <h3>All Notes</h3>
          {notes.map((note) => (
            <>
              <p>{note.title}</p>
            </>
          ))}
          <PostForm />
        </div>
        <main>
          <div className="link-div">
            <ul className="category-navbar">
              <Link to={"/work"}>Work</Link>
              <Link to={"/personal"}>Personal</Link>
              <Link to={"/fun"}>Fun</Link>
              <Link to={"/important"}>Important</Link>
            </ul>
          </div>
          <div className="notes">
            {notes.map((note) => (
              <>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <p>{note.createdAt}</p>
              </>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Fun;
