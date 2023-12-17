import React, { useState } from 'react';
import styles from './InputSection.module.css';
import { urls } from '../../utils/api';
import { ISentimentArray } from '../../utils/types';

interface IInputSection {
  message: string;
  setMessage: (message: string) => void;
  setFunctionalSentiment: React.Dispatch<React.SetStateAction<ISentimentArray>>;
  setEmotionalSentiment: React.Dispatch<React.SetStateAction<string>>;
  setLanguageDetected: React.Dispatch<React.SetStateAction<string>>;
  setFunctionalSentimentLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setEmotionalSentimentLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setLanguageDetectedLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputSection: React.FC<IInputSection> = ({
  message,
  setMessage,
  setFunctionalSentiment,
  setEmotionalSentiment,
  setLanguageDetected,
  setFunctionalSentimentLoading,
  setEmotionalSentimentLoading,
  setLanguageDetectedLoading,
}) => {
  const [inputText, setInputText] = useState(message);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      // Functional Sentiment Fetch
      setFunctionalSentimentLoading(true);
      setLanguageDetectedLoading(true);
      setEmotionalSentimentLoading(true);

      const functionalResponse = await fetch(urls.functionalSentiment, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [message] }),
      });
      const functionalData = await functionalResponse.json();
      setFunctionalSentiment({
        message: functionalData[0].message,
        functionalSentiment: functionalData[0].functional_sentiment,
      });
      setFunctionalSentimentLoading(false);
      console.log(functionalData[0].functional_sentiment)
      // Language Detection Fetch
      const languageResponse = await fetch(urls.languageDetection, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [message] }),
      });
      const languageData = await languageResponse.json();
      setLanguageDetected(languageData[0].detected_language);
      console.log(languageData[0].detected_language)
      setLanguageDetectedLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error); 
      }

      // Emotional Sentiment Fetch
      const emotionalResponse = await fetch(urls.emotionalSentiment, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [message] }),
      });
      const emotionalData = await emotionalResponse.json();
      console.log(emotionalData[0].emotional_sentiment)
      setEmotionalSentiment(emotionalData[0].emotional_sentiment);
      setEmotionalSentimentLoading(false);


          
  };


  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setMessage('');
    setInputText('');
  };

  const handleMessageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setInputText(newText);
    setMessage(newText);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h1 className={styles.title}>Введите сообщение</h1>
      <input
        className={styles.inputText}
        placeholder="Сообщение для анализа"
        type="text"
        value={inputText}
        onChange={handleMessageUpdate}
      />

      <div className={styles.buttonSection}>
        <button className={styles.buttonClear} onClick={handleClearClick}>
          Очистить
        </button>
        <button className={styles.button} type="submit">
          Отправить на анализ
        </button>
      </div>
    </form>
  );
};

export default InputSection;
