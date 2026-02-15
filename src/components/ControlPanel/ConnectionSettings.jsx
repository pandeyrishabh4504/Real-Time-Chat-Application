import React from 'react';
import SignalBars from '../shared/SignalBars';

const ConnectionSettings = ({
  networkType, setNetworkType,
  wifiStrength, setWifiStrength,
  signalStrength, setSignalStrength,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mt-0 mb-3 flex items-center gap-2">
        <span className="text-lg">📶</span> Connection
      </h3>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Network Type</label>
        <div className="flex gap-1.5 flex-wrap">
          {['None', '3G', '4G', 'WiFi'].map((type) => (
            <button
              key={type}
              onClick={() => setNetworkType(type)}
              className={`px-3 py-2 rounded-md text-xs font-medium border transition-colors ${
                networkType === type
                  ? 'bg-green-500 text-white border-green-600'
                  : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs text-gray-600 font-medium">WiFi Signal</label>
          <SignalBars strength={wifiStrength} total={4} color="#25D366" />
        </div>
        <input
          type="range"
          min="0"
          max="4"
          value={wifiStrength}
          onChange={(e) => setWifiStrength(parseInt(e.target.value))}
          className="w-full h-1.5 rounded bg-gray-200 outline-none appearance-none
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500"
        />
      </div>

      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs text-gray-600 font-medium">Mobile Signal</label>
          <SignalBars strength={signalStrength} total={5} color="#25D366" />
        </div>
        <input
          type="range"
          min="0"
          max="5"
          value={signalStrength}
          onChange={(e) => setSignalStrength(parseInt(e.target.value))}
          className="w-full h-1.5 rounded bg-gray-200 outline-none appearance-none
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500"
        />
      </div>
    </div>
  );
};

export default ConnectionSettings;