import React, { createContext,useContext } from 'react';

import './App.css';

const Context = createContext();


function App() {
  const theme = 'dark';

  return (
    <div className="App">
      <header className="App-header">

        <Context.Provider value={{theme, title:'Hello World'}}>
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
  const ctx = useContext(Context);
  console.log(ctx);
  return (
    <button> {ctx.theme} - {ctx.title}</button>
  )
}

export default App;
