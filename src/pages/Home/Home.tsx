import React, { useState, useEffect } from 'react';
import InputSection from '../../components/InputSection/InputSection';
import styles from './Home.module.css'
import OutputSection from '../../components/OutputSection/OutputSection';
import { ISentimentArray } from '../../utils/types';

const HomePage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [functionalSentiment, setFunctionalSentiment] = useState<ISentimentArray>({ message: '', functionalSentiment: {
    positive: 0,
    neutral: 0,
    negative: 0,
    speech: 0,
    skip: 0,
  } });
  const [emotionalSentiment, setEmotionalSentiment] = useState<string>('');
  const [languageDetected, setLanguageDetected] = useState<string>('');

  const [functionalSentimentLoading, setFunctionalSentimentLoading] = useState<boolean>(false);
  const [emotionalSentimentLoading, setEmotionalSentimentLoading] = useState<boolean>(false);
  const [languageDetectedLoading, setLanguageDetectedLoading] = useState<boolean>(false);

  return (
  
      <div className={styles.mainContainer}>
          <h1 className={styles.mainTitle}>Анализ тональности русскоязычного текста</h1>
            <div className={styles.container}>
              <InputSection 
              message={message} setMessage={setMessage} 
              setFunctionalSentiment={setFunctionalSentiment} 
              setEmotionalSentiment={setEmotionalSentiment} 
              setLanguageDetected={setLanguageDetected}
              setFunctionalSentimentLoading={setFunctionalSentimentLoading}
              setEmotionalSentimentLoading={setEmotionalSentimentLoading}
              setLanguageDetectedLoading={setLanguageDetectedLoading}
              />
              <OutputSection 
              functionalSentiment={functionalSentiment} 
              emotionalSentiment={emotionalSentiment} 
              languageDetected={languageDetected}
              functionalSentimentLoading={functionalSentimentLoading}
              emotionalSentimentLoading={emotionalSentimentLoading}
              languageDetectedLoading={languageDetectedLoading}
              />
            </div>
      </div>

  );
};

export default HomePage;
