import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JoinRoom = () => {
  const [roomName, setRoomName] = useState('');

  return (
    <div className='home-container'>
      <input
        type='text'
        placeholder='Room'
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        className='text-input-field'
      />
      <Link to={`/${roomName}`} className='enter-room-button'>
        Join room
      </Link>
    </div>
  );
};

export default JoinRoom;
