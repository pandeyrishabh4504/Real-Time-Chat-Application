import React from 'react';

// Helper inside component
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

const MessageBubble = ({ message }) => {
  const isSent = message.type === 'sent';

  return (
    <div
      className={`max-w-[75%] px-4 py-3 rounded-2xl border border-white/10 backdrop-blur-md ${
        isSent
          ? 'self-end bg-green-500/20 rounded-br-sm rounded-bl-[18px]'
          : 'self-start bg-white/10 rounded-bl-sm rounded-br-[18px]'
      }`}
    >
      <div className="text-sm text-white leading-relaxed">{message.text}</div>
      <div className="flex justify-end items-center gap-1.5 mt-1.5 text-xs text-gray-400">
        <span>{message.time}</span>
        {message.status && message.status !== 'none' && (
          <span className="text-xs" style={{ color: getStatusColor(message.status) }}>
            {getStatusIcon(message.status)}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;