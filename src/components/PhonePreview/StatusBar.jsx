import React from 'react';
import SignalBars from '../shared/SignalBars';

const StatusBar = ({
  operator, time, battery, showBatteryPercent,
  networkType, wifiStrength, signalStrength,
}) => {
  return (
    <div className="bg-black text-white px-5 py-3 flex justify-between items-center text-xs font-semibold h-11 border-b border-gray-800">
      {/* Left side */}
      <div className="flex items-center gap-2">
        <div className="text-sm font-semibold">{operator}</div>
        {networkType !== 'WiFi' && networkType !== 'None' && (
          <div className="text-xs text-green-500 bg-green-900/10 px-1.5 py-0.5 rounded">
            {networkType}
          </div>
        )}
        <div className="flex items-center gap-0.5">
          {networkType !== 'WiFi' ? (
            <SignalBars strength={signalStrength} total={5} />
          ) : (
            <SignalBars strength={wifiStrength} total={4} />
          )}
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold">{time}</span>
        <div className="flex items-center gap-1">
          {showBatteryPercent && <span className="text-xs text-white">{battery}%</span>}
          <div className="w-6 h-3 bg-transparent border border-gray-600 rounded relative overflow-hidden">
            <div
              className="h-full rounded-sm"
              style={{
                width: `${battery}%`,
                backgroundColor: battery > 20 ? '#25D366' : '#ff3b30',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;