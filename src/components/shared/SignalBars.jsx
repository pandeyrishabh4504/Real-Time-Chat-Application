import React from 'react';

const SignalBars = ({ strength, total = 5, color = '#25D366' }) => {
  const bars = [];
  for (let i = 1; i <= total; i++) {
    bars.push(
      <div
        key={i}
        className="w-1 rounded-[1px] mr-0.5"
        style={{
          height: `${i * 3}px`,
          backgroundColor: i <= strength ? color : '#666',
        }}
      />
    );
  }
  return <div className="flex items-center gap-0.5">{bars}</div>;
};

export default SignalBars;