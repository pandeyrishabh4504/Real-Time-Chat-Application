import React from 'react';

const BatterySettings = ({ battery, setBattery, showBatteryPercent, setShowBatteryPercent }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mt-0 mb-3 flex items-center gap-2">
        <span className="text-lg">🔋</span> Battery Settings
      </h3>

      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs text-gray-600 font-medium">Battery Percentage</label>
          <span className="text-xs text-green-500 font-semibold bg-green-50 px-2 py-0.5 rounded">
            {battery}%
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={battery}
          onChange={(e) => setBattery(parseInt(e.target.value))}
          className="w-full h-1.5 rounded bg-gray-200 outline-none appearance-none
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500"
        />
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Show Percentage</label>
        <div className="flex gap-2">
          <button
            onClick={() => setShowBatteryPercent(true)}
            className={`flex-1 px-3 py-2 rounded-md text-xs font-medium border transition-colors ${
              showBatteryPercent
                ? 'bg-green-500 text-white border-green-600'
                : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            Show
          </button>
          <button
            onClick={() => setShowBatteryPercent(false)}
            className={`flex-1 px-3 py-2 rounded-md text-xs font-medium border transition-colors ${
              !showBatteryPercent
                ? 'bg-green-500 text-white border-green-600'
                : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            Hide
          </button>
        </div>
      </div>
    </div>
  );
};

export default BatterySettings;