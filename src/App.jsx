import React, { useState } from 'react';
import Header from './Components/Header';
import InputArea from './Components/InputArea';
import ChatArea from './Components/ChatArea';
import './App.css';

const App = () => {
    const [messages, setMessages] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = (reply) => {
        setMessages(reply);
    };

    return (
        <div className="app">
            <Header />
            <div className="main-content">
                <ChatArea messages={messages} isLoading={isLoading} />
            </div>
            <InputArea onSendMessage={handleSendMessage} setIsLoading={setIsLoading} />
        </div>
    );
};

export default App;

