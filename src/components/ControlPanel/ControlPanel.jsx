import React from 'react';
import OperatorSettings from './OperatorSettings';
import BatterySettings from './BatterySettings';
import ConnectionSettings from './ConnectionSettings';
import MessageSettings from './MessageSettings';

const ControlPanel = ({
  operator, setOperator,
  time, setTime,
  contactName, setContactName,
  contactStatus, setContactStatus,
  battery, setBattery,
  showBatteryPercent, setShowBatteryPercent,
  networkType, setNetworkType,
  wifiStrength, setWifiStrength,
  signalStrength, setSignalStrength,
  messageBubbleType, setMessageBubbleType,
  messageText, setMessageText,
  messageTime, setMessageTime,
  messageStatus, setMessageStatus,
  addNewMessage,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 mb-8 shadow-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
        <div className="bg-green-500 text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold mr-4">
          W
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 m-0">Fake WhatsApp Generator</h1>
          <p className="text-gray-600 text-sm mt-1.5 mb-0">Create realistic WhatsApp chat screenshots</p>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <OperatorSettings
          operator={operator} setOperator={setOperator}
          time={time} setTime={setTime}
          contactName={contactName} setContactName={setContactName}
          contactStatus={contactStatus} setContactStatus={setContactStatus}
        />
        <BatterySettings
          battery={battery} setBattery={setBattery}
          showBatteryPercent={showBatteryPercent} setShowBatteryPercent={setShowBatteryPercent}
        />
        <ConnectionSettings
          networkType={networkType} setNetworkType={setNetworkType}
          wifiStrength={wifiStrength} setWifiStrength={setWifiStrength}
          signalStrength={signalStrength} setSignalStrength={setSignalStrength}
        />
        <MessageSettings
          messageBubbleType={messageBubbleType} setMessageBubbleType={setMessageBubbleType}
          messageText={messageText} setMessageText={setMessageText}
          messageTime={messageTime} setMessageTime={setMessageTime}
          messageStatus={messageStatus} setMessageStatus={setMessageStatus}
          addNewMessage={addNewMessage}
        />
      </div>
    </div>
  );
};

export default ControlPanel;