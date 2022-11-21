import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router,  Link, NavLink } from "react-router-dom"
import '../App.css'

function Fun() {
  const [notes, setNotes] = useState([
    {
      "Title": "My second job",
      "Content": "lorem lorem lorem lorem lorem",
      "Category": "Work",
      "Date": "01.01.2022"
    },
    {
      "Title": "My second job",
      "Content": "lorem lorem lorem lorem lorem",
      "Category": "Work",
      "Date": "01.01.2022"
    },
  ])

  return (
    <div className="App">
      <header>
        <h2>My Notes App</h2>
        <div className='search-bar'>
        <input placeholder='Search your notes'></input>
        <button>Search</button>
        </div>
      </header>
      <div className='note-content'>
      <div className='sidebar'>
        <h3>All Notes</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      </div>
      <main>
        <div className='link-div' >
        <ul className='category-navbar'>
            <Link to={'/work'}>Work</Link>
            <Link to={'/personal'}>Personal</Link>
            <Link to={'/fun'}>Fun</Link>
            <Link to={'/important'}>Important</Link>
          </ul>
        </div>
        <div className='notes'>
          {notes.map (note => (
            <>
              <h3>{note.Title}</h3>
              <p>{note.Content}</p>
              <p>{note.Date}</p>
            </>
          ) )}
        </div>
      </main>
      </div>
    </div>
  )
}

export default Fun
