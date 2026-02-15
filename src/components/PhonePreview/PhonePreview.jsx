import React from 'react';
import StatusBar from './StatusBar';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';

const PhonePreview = ({
  operator, time, battery, showBatteryPercent,
  networkType, wifiStrength, signalStrength,
  contactName, contactStatus,
  messages,
  inputMessage, setInputMessage, sendMessage,
  messageStatus,  // for auto-reply status
}) => {
  return (
    <div className="flex justify-center items-center min-h-150">
      <div className="w-96 h-185 bg-black rounded-[50px] overflow-hidden flex flex-col border-15 border-gray-900 relative shadow-2xl">
        <StatusBar
          operator={operator}
          time={time}
          battery={battery}
          showBatteryPercent={showBatteryPercent}
          networkType={networkType}
          wifiStrength={wifiStrength}
          signalStrength={signalStrength}
        />
        <ChatHeader contactName={contactName} contactStatus={contactStatus} />
        <ChatMessages messages={messages} />
        <MessageInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default PhonePreview;