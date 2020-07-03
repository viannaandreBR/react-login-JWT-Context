import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const theme = 'dark';

  return (
    <div className="App">
      <header className="App-header">
       <Login theme={theme}/>

      </header>
    </div>
  );
}

function Login({ theme }){
  return <Button theme={theme}/>
}

function Button({theme}){
  return (
    <button>{theme}</button>
  )
}

export default App;
