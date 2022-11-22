import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Important from "./pages/Important";
import Personal from "./pages/Personal";
import Work from "./pages/Work";
import Fun from "./pages/Fun";
import { Notes } from "./utilis";

function App() {
  const [notes, setNotes] = useState<Notes[]>([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={<Home notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/fun"
            element={<Fun notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/work"
            element={<Work notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/personal"
            element={<Personal notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/important"
            element={<Important notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
