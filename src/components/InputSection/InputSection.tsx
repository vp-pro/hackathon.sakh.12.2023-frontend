import React, { useState } from 'react';

interface IInputSection {
  value: string;
  setMessage: (message: string) => void;
}

const InputSection: React.FC<IInputSection> = ({ value, setMessage }) => {
  const [inputText, setInputText] = useState(value);

  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setInputText(value); // Reset the input to its initial state
    setMessage(value); // Update the parent state with the initial value
  };
  
  const handleMessageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setInputText(newText);
    setMessage(newText);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleMessageUpdate} />
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
};

export default InputSection;
