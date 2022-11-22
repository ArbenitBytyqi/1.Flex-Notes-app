import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function PostForm() {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <form
        className="post-form"
        onSubmit={(event) => {
          event.preventDefault();
          const newNote = {
            title: event.target.title.value,
            content: event.target.content.value,
            category: event.target.category.value,
          };
          fetch("http://localhost:5500/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newNote),
          }).then(() => {
            fetch("http://localhost:5500/notes")
              .then((resp) => resp.json())
              .then((notes) => {
                setNotes(notes);
              });
          });
          // navigate("/posts");
        }}
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title?"
          required
        ></input>
        <textarea
          name="content"
          id="content"
          placeholder="What is the note content?"
          required
          rows={4}
        ></textarea>
        <select name="category" id="category" placeholder="Category?" required>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Fun">Fun</option>
          <option value="Important">Important</option>
        </select>
        <button className="post-btn">POST</button>
      </form>
    </>
  );
}
