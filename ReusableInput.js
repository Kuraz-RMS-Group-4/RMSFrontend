import React from 'react';

const ReusableInput = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>
  );
};

export default ReusableInput;
