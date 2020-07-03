import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Login />

      </header>
    </div>
  );
}

function Login(){
  return <Button />
}

function Button(){
  return (
    <button>Olá Context</button>
  )
}

export default App;
