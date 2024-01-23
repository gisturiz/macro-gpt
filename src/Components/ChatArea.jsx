import React from 'react';
import './ChatArea.css';
import { Rings } from 'react-loader-spinner';

const ChatArea = ({ messages, isLoading }) => {
    return (
        <div className='chat-area'>
            {isLoading ? <div className=""><Rings color="#1452f0" /></div> :
                messages ?
                    (<>
                        <div>
                            <strong>{messages.question}</strong><br />
                            {messages.answer}
                        </div>
                        <div>
                            Sources: <br />
                            {messages.url.map((url, i) => (
                                <ul>
                                    <li><a href={url} target="_blank" rel="noreferrer" key={i}>{url}</a></li>
                                </ul>
                            ))}
                        </div>
                    </>)
                    :
                    null}

        </div>
    );
};

export default ChatArea;