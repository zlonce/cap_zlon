import React from 'react';

const Dropdown = ({ label, options, selectedOption, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <span style={{ marginRight: '8px' }}>{label}</span>
      <select value={selectedOption} onChange={onChange} style={{ padding: '4px' }}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;