import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterestMessages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/interest-messages/')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => console.error('Error fetching interest messages:', error));
  }, []);

  const handleSendMessage = () => {
    axios.post('http://127.0.0.1:8000/api/interest-messages/', {
      interest_message: newMessage,
      sender: 1, // Replace with actual sender ID
      recipient: 1 // Replace with actual recipient ID
    })
    .then(response => {
      setMessages([...messages, response.data]);
      setNewMessage('');
    })
    .catch(error => console.error('Error sending interest message:', error));
  };

  return (
    <div className="interest-container">
      <h2>Interest Messages</h2>
      {messages.map(msg => (
        <div key={msg.id} className="interest-item">
          <p><strong>From:</strong> {msg.sender}</p>
          <p><strong>To:</strong> {msg.recipient}</p>
          <p><strong>Message:</strong> {msg.interest_message}</p>
          <img src="https://your-image-url.com/interest-icon.png" alt="Interest Icon" />
        </div>
      ))}
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your interest message here..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default InterestMessages;
