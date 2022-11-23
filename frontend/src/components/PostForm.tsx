import React, { useState } from "react";
import { SetStateAction, useEffect } from "react";
import { Notes } from "../utilis";

type Props = {
  notes: any;
  setNotes: React.Dispatch<SetStateAction<Notes[]>>;
};

export function PostForm({ notes, setNotes }: Props) {
  useEffect(() => {
    fetch(`http://localhost:4000/notes`)
      .then((resp) => resp.json())
      .then((notesFromServer) => setNotes(notesFromServer));
  }, []);
  return (
    <div className="posting-notes">
      <form
        className="post-form"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            title: e.target.title.value,
            content: e.target.content.value,
            category: e.target.category.value,
          };
          fetch("http://localhost:4000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }).then(() => {
            fetch("http://localhost:4000/notes")
              .then((resp) => resp.json())
              .then((notesFromServer) => setNotes(notesFromServer));
          });
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
    </div>
  );
}
