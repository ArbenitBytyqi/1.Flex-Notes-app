import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function PostForm() {
  const [notes, setNotes] = useState([
    {
      Title: "My first job",
      Content: "lorem lorem lorem lorem lorem",
      Category: "Work",
      Date: "01.01.2022",
    },
    {
      Title: "My first job",
      Content: "lorem lorem lorem lorem lorem",
      Category: "Work",
      Date: "01.01.2022",
    },
  ]);
  return (
    <>
      <form className="post-form">
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
