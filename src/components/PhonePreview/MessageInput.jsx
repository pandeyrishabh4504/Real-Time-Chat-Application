import React from 'react';

const MessageInput = ({ inputMessage, setInputMessage, sendMessage }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="p-3 bg-gray-900 flex items-center gap-3 border-t border-gray-800">
      <div className="flex-1 bg-gray-800 rounded-3xl px-5 flex items-center h-11">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border-none outline-none text-sm bg-transparent text-white placeholder-gray-400"
        />
      </div>
      <button
        onClick={sendMessage}
        disabled={!inputMessage.trim()}
        className={`bg-green-500 text-white border-none rounded-full w-11 h-11 cursor-pointer text-xl font-bold flex items-center justify-center transition-all ${
          !inputMessage.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600 active:scale-95'
        }`}
      >
        ↑
      </button>
    </div>
  );
};

export default MessageInput;