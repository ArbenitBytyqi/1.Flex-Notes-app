import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { PostForm } from "../components/PostForm";
import { SearchBar } from "../components/SearchBar";

function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5500/notes`)
      .then((resp) => resp.json())
      .then((notesFromServer) => setNotes(notesFromServer));
  }, []);

  return (
    <div className="App">
      <header>
        <h2>My Notes App</h2>
        <SearchBar />
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
          <div>
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
                <p>{note.date}</p>
              </>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
