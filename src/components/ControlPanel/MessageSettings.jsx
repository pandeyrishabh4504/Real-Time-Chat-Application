import React from 'react';

// Helper inside component – koi alag file nahi
const getStatusIcon = (status) => {
  switch (status) {
    case 'sent': return '✓';
    case 'delivered': return '✓✓';
    case 'read': return '✓✓';
    default: return '';
  }
};

const getStatusColor = (status) => {
  if (status === 'read') return '#34B7F1';
  return '#999';
};

const MessageSettings = ({
  messageBubbleType, setMessageBubbleType,
  messageText, setMessageText,
  messageTime, setMessageTime,
  messageStatus, setMessageStatus,
  addNewMessage,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mt-0 mb-3 flex items-center gap-2">
        <span className="text-lg">💬</span> Message Options
      </h3>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Message Type</label>
        <div className="flex gap-2">
          <button
            onClick={() => setMessageBubbleType('grey')}
            className={`flex-1 px-3 py-2 rounded-md text-xs font-medium border transition-colors ${
              messageBubbleType === 'grey'
                ? 'bg-gray-600 text-white border-gray-700'
                : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            Grey Bubble
          </button>
          <button
            onClick={() => setMessageBubbleType('green')}
            className={`flex-1 px-3 py-2 rounded-md text-xs font-medium border transition-colors ${
              messageBubbleType === 'green'
                ? 'bg-green-500 text-white border-green-600'
                : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            Green Bubble
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Message Text</label>
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Message Time</label>
        <input
          type="text"
          value={messageTime}
          onChange={(e) => setMessageTime(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Message Status</label>
        <div className="flex flex-col gap-2">
          {['none', 'sent', 'delivered', 'read'].map((status) => (
            <button
              key={status}
              onClick={() => setMessageStatus(status)}
              className={`px-3 py-2 rounded-md text-xs font-medium text-left flex justify-between items-center border transition-colors ${
                messageStatus === status
                  ? 'bg-gray-100 border-green-500'
                  : 'bg-white border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
              <span className="text-xs" style={{ color: getStatusColor(status) }}>
                {getStatusIcon(status)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={addNewMessage}
        className="w-full px-3 py-3 bg-teal-700 text-white border-none rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 mt-2 hover:bg-teal-800 active:scale-[0.98]"
      >
        + Add to Conversation
      </button>
    </div>
  );
};

export default MessageSettings;