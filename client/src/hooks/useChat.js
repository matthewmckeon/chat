import { useEffect, useRef, useState } from 'react';
import socket from 'socket.io-client';

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    // Establish connection
    socketRef.current = socket('http://localhost:5000', {
      query: { roomId },
    });

    // Listens for messages
    socketRef.current.on('message', (message) => {
      const incomingMessage = {
        ...message,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // Close connection
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // message => server => /:roomId
  const sendMessage = (message) => {
    socketRef.current.emit('message', {
      body: message,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
