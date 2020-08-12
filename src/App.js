import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(''); //hooks
  const [messeges, setMesseges] = useState(['Hi there👋','Welcome!','make yourself at home 🛋️']);
  console.log(input);
  console.log(messeges);

  // handle submit
  const sendMessege = (event) => {
    event.preventDefault();
    setMesseges([...messeges,input]);
    setInput('');
  }

  return (
    <div className="app">
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button type='submit' onClick={sendMessege}>send</button>
      </form>

      {
        messeges.map(messege => (
          <p>{messege}</p>
        ))
      }
    </div>
  );
}

export default App;
