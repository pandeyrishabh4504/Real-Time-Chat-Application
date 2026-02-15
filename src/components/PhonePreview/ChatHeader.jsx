import React from 'react';

const ChatHeader = ({ contactName, contactStatus }) => {
  return (
    <div className="bg-gray-900 text-white px-5 py-3 flex items-center gap-4 border-b border-gray-800">
      <div className="text-2xl text-white cursor-pointer">←</div>
      <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-xl font-bold border-2 border-white/30">
        {contactName.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="text-lg font-semibold text-white mb-0.5">{contactName}</div>
        <div className={`text-sm ${contactStatus === 'online' ? 'text-green-500' : 'text-gray-400'}`}>
          {contactStatus === 'online' && '● online'}
          {contactStatus === 'typing...' && '✍️ typing...'}
          {contactStatus === 'last seen' && 'last seen today at 9:30'}
        </div>
      </div>
      <div className="flex gap-5 text-2xl text-white">
        <span className="cursor-pointer hover:text-gray-300 transition-colors">📹</span>
        <span className="cursor-pointer hover:text-gray-300 transition-colors">📞</span>
      </div>
    </div>
  );
};

export default ChatHeader;