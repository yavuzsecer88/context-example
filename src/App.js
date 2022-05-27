import React from "react";
import SourceElement from "./components/SourceElement";
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <a className="header-logo" href="/">LOGO</a>
        </div>
        <div>
          <a href="/" className="nav-link">HOME</a>
          <a href="/" className="nav-link">CONTACT</a>
        </div>
      </header>
      <SourceElement />
    </div>
  );
}

export default App;
