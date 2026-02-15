import React from 'react';
import MessageBubble from './MessageBubble';

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 p-4 bg-black bg-linear-to-b from-black/90 to-black/90 flex flex-col gap-3 overflow-y-auto">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default ChatMessages;