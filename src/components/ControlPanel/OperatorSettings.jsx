import React from 'react';

const OperatorSettings = ({
  operator, setOperator,
  time, setTime,
  contactName, setContactName,
  contactStatus, setContactStatus,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mt-0 mb-3 flex items-center gap-2">
        <span className="text-lg">📱</span> Operator & Phone
      </h3>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Operator Name</label>
        <input
          type="text"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Phone Time</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Contact Name</label>
        <input
          type="text"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-600 mb-1.5 font-medium block">Contact Status</label>
        <div className="flex gap-2">
          {['online', 'typing...', 'last seen'].map((status) => (
            <button
              key={status}
              onClick={() => setContactStatus(status)}
              className={`flex-1 px-3 py-2 rounded-md text-xs font-medium border transition-colors ${
                contactStatus === status
                  ? 'bg-green-500 text-white border-green-600'
                  : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperatorSettings;