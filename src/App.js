import React, { createContext,useContext } from 'react';

import './App.css';

const Context = createContext();


function App() {
  const theme = 'dark';

  return (
    <div className="App">
      <header className="App-header">

        <Context.Provider value={theme}>
            <Login/>
        </Context.Provider>
       
      </header>
    </div>
  );
}

function Login(){
  return <Button/>
}

function Button(){
  const theme = useContext(Context);
  return (
    <button> {theme} </button>
  )
}

export default App;
