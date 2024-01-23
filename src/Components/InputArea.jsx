import React, { useState } from 'react';
import axios from 'axios';
import './InputArea.css';

const InputArea = ({ onSendMessage, setIsLoading }) => {
    const [message, setMessage] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        axios.post("https://base-gpt-backend-e08e8c9d9fc2.herokuapp.com/predict", {
            "text": message
        })
            .then(res => {
                console.log(res.data);
                setIsLoading(false);
                setMessage('');
                onSendMessage(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <form className="input-area" onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default InputArea;