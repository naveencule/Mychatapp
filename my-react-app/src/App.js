import React from 'react';
import './App.css';
import ChatMessages from './components/ChatMessages';
import InterestMessages from './components/InterestMessages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to FC Barcelona Chat</h1>
        <ChatMessages />
        <InterestMessages />
      </header>
    </div>
  );
}

export default App;
