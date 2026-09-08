import React from 'react';

const Toast = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="toast-notification active">
      <svg width="20" height="20" fill="none" stroke="#10b981" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
