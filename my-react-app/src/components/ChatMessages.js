import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatMessages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/chat-messages/')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => console.error('Error fetching chat messages:', error));
  }, []);

  const handleSendMessage = () => {
    axios.post('http://127.0.0.1:8000/api/chat-messages/', {
      message: newMessage,
      sender: 1, // Replace with actual sender ID
      recipient: 1 // Replace with actual recipient ID
    })
    .then(response => {
      setMessages([...messages, response.data]);
      setNewMessage('');
    })
    .catch(error => console.error('Error sending chat message:', error));
  };

  return (
    <div className="message-container">
      <h2>Chat Messages</h2>
      {messages.map(msg => (
        <div key={msg.id} className="message-item">
          <p><strong>From:</strong> {msg.sender}</p>
          <p><strong>To:</strong> {msg.recipient}</p>
          <p><strong>Message:</strong> {msg.message}</p>
          <img src="https://your-image-url.com/message-icon.png" alt="Message Icon" />
        </div>
      ))}
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatMessages;
