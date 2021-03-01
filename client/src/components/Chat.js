import React, { useState } from 'react';
import useChat from '../hooks/useChat';

const Chat = (props) => {
  const { roomId } = props.match.params;
  const [message, setMessage] = useState('');
  const { messages, sendMessage } = useChat(roomId);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  return (
    <div>
      <div>
        <h2>Welcome to room {roomId}</h2>
        {messages.map((message, index) => (
          <p key={index}>{message.body}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label>Message: </label>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Chat;
