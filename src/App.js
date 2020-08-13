import React, { useState, useEffect } from 'react';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';
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
      setMessages(snapshot.docs.map(doc => 
        ({id: doc.id , message:doc.data()})))
    })
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
      <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/p6_sqYxQ9ch.png" alt="logo"/>
      <h4>Welcome {username}</h4>

      <div className="app__input">
        <form className='app__form'>
          <FormControl className="app__formControl">
            <InputLabel >Enter a messege</InputLabel>
            <Input className='app__input' value={input} onChange={event => setInput(event.target.value)}/>

            <IconButton
              disabled={!input}
              variant='contained' 
              color='primary' 
              type='submit'
              onClick={sendMessege}
              className="app__iconButton"
            >
            <SendIcon />
            </IconButton>

            
          </FormControl>
        </form>
      </div>
      <FlipMove>
      {
        // messages es un array de message que es un objeto con un campo id y un campo message
        messages.map(({ id, message }) => (
          <Message key={id} username={username} text={message}/>
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
