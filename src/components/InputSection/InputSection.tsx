import React, { useState } from 'react';
import styles from './InputSection.module.css'
import {urls} from '../../utils/api'
import { ISentimentArray } from '../../utils/types';

interface IInputSection {
    message: string;
  setMessage: (message: string) => void;
  setResults: React.Dispatch<React.SetStateAction<ISentimentArray>>;
}

const InputSection: React.FC<IInputSection> = ({ message, setMessage, setResults }) => {
  const [inputText, setInputText] = useState(message);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(urls.base, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: [message] }),
      });

      const data = await response.json();
      console.log(data[0])
      setResults(data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setMessage(''); // Update the parent state with the initial value
    setInputText(''); // Reset the input to its initial state
  };

  const handleMessageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setInputText(newText);
    setMessage(newText);
  };

  
  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className={styles.Title}></h1>
            <input type="text" value={inputText} onChange={handleMessageUpdate} />

        <div className={styles.buttonSection}>
            <button onClick={handleClearClick}>Clear</button>
            <button type="submit">Submit</button>
        </div>
  </form>


  );
};

export default InputSection;
