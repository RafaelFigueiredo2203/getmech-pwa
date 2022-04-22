import React from 'react';
import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskInput = ({ value, onChange, name, mask , placeholder }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value)
      }
    });
  }

  return (
    <InputMask
      placeholder={placeholder}
      name={name}
      mask={mask}
      value={value}
      onChange={handleChange}
    />
  );
};

export default MaskInput;