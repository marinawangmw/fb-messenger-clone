import React, { useState, useEffect } from 'react';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState(''); //hooks
  const [username, setUsername] = useState('');

  const [messages, setMessages] = useState([]);

  // pedir el username al arrancar la app
  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [] )

  // traeme los mensajes guardados en la base y settealos en el estado
  // listener
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
    console.log(messages)
  }, [])

  // handle submit
  const sendMessege = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      username:username, 
      message:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="app">
      <h1>Helloooo</h1>
      <h2>Welcome {username}</h2>

      <div className="app__input">
        <form>
          <FormControl>
            <InputLabel >Enter a messege</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
            <Button 
              disabled={!input}
              variant='contained' 
              color='primary' 
              type='submit' 
              onClick={sendMessege}>
                send
              </Button>
          </FormControl>
        </form>
      </div>
      {
        messages.map(message => (
          <Message username={username} text={message}/>
        ))
      }
    </div>
  );
}

export default App;
