import React, { useState } from 'react';
import ControlPanel from './components/ControlPanel/ControlPanel';
import PhonePreview from './components/PhonePreview/PhonePreview';

const FakeChat = () => {
  // ---------- Phone Settings ----------
  const [operator, setOperator] = useState('vodafone');
  const [time, setTime] = useState('9:41 AM');
  const [battery, setBattery] = useState(50);
  const [showBatteryPercent, setShowBatteryPercent] = useState(true);
  const [signalStrength, setSignalStrength] = useState(4);
  const [wifiStrength, setWifiStrength] = useState(3);
  const [networkType, setNetworkType] = useState('WiFi');

  // ---------- Contact Info ----------
  const [contactName, setContactName] = useState('Johnny Doe');
  const [contactStatus, setContactStatus] = useState('online');

  // ---------- Message Settings (Control Panel) ----------
  const [messageBubbleType, setMessageBubbleType] = useState('green');
  const [messageText, setMessageText] = useState('This is a sample message');
  const [messageTime, setMessageTime] = useState('9:43 AM');
  const [messageStatus, setMessageStatus] = useState('delivered');

  // ---------- Phone Input ----------
  const [inputMessage, setInputMessage] = useState('');

  // ---------- Chat Messages ----------
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'received',
      time: '9:41 AM',
      status: '',
    },
    {
      id: 2,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'sent',
      time: '9:42 AM',
      status: 'delivered',
    },
  ]);

  // ---------- Functions ----------
  const addNewMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      text: messageText || 'New message',
      type: messageBubbleType === 'green' ? 'sent' : 'received',
      time: messageTime,
      status: messageStatus,
    };
    setMessages([...messages, newMessage]);
  };

  const sendMessageFromPhone = () => {
    if (!inputMessage.trim()) return;

    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      type: 'sent',
      time: formattedTime,
      status: messageStatus,
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Auto reply after 1 sec
    setTimeout(() => {
      const replyTime = new Date(now.getTime() + 1000);
      const replyFormatted = replyTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      const autoReply = {
        id: messages.length + 2,
        text: 'Thanks for your message!',
        type: 'received',
        time: replyFormatted,
        status: messageStatus,
      };

      setMessages((prev) => [...prev, autoReply]);
    }, 1000);
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 p-5">
      <ControlPanel
        // Operator
        operator={operator} setOperator={setOperator}
        time={time} setTime={setTime}
        contactName={contactName} setContactName={setContactName}
        contactStatus={contactStatus} setContactStatus={setContactStatus}
        // Battery
        battery={battery} setBattery={setBattery}
        showBatteryPercent={showBatteryPercent} setShowBatteryPercent={setShowBatteryPercent}
        // Connection
        networkType={networkType} setNetworkType={setNetworkType}
        wifiStrength={wifiStrength} setWifiStrength={setWifiStrength}
        signalStrength={signalStrength} setSignalStrength={setSignalStrength}
        // Message Settings
        messageBubbleType={messageBubbleType} setMessageBubbleType={setMessageBubbleType}
        messageText={messageText} setMessageText={setMessageText}
        messageTime={messageTime} setMessageTime={setMessageTime}
        messageStatus={messageStatus} setMessageStatus={setMessageStatus}
        addNewMessage={addNewMessage}
      />

      <PhonePreview
        // Phone top
        operator={operator}
        time={time}
        battery={battery}
        showBatteryPercent={showBatteryPercent}
        networkType={networkType}
        wifiStrength={wifiStrength}
        signalStrength={signalStrength}
        // Contact
        contactName={contactName}
        contactStatus={contactStatus}
        // Messages
        messages={messages}
        // Input
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        sendMessage={sendMessageFromPhone}
        // For message status icons inside bubbles
        messageStatus={messageStatus}
      />
    </div>
  );
};

export default FakeChat;