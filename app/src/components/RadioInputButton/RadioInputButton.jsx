import React from 'react';

const RadioButton = ({ value, label, checked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="accent-[#FF5500]  h-5 w-5"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default RadioButton;
