import React, { useState } from 'react';
import useChat from '../hooks/useChat';

const Chat = (props) => {
  const { roomId } = props.match.params;
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const { messages, sendMessage } = useChat(roomId);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message, name);
    setMessage('');
  };

  return (
    <div>
      <div>
        <h2>Welcome to room {roomId}</h2>
        {messages.map((message, index) => (
          <p key={index}>{message.name}: {message.body}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
      <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Message: </label>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Chat;
