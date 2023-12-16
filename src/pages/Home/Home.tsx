import React, { useState, useEffect } from 'react';
import InputSection from '../../components/InputSection/InputSection';
import styles from './Home.module.css'
import OutputSection from '../../components/OutputSection/OutputSection';
import { ISentimentArray } from '../../utils/types';

const HomePage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [results, setResults] = useState<ISentimentArray>({ message: '', sentiment: {
    positive: 0,
    neutral: 0,
    negative: 0,
    speech: 0,
    skip: 0,
  } });


  return (
    <div className={styles.container}>
      <InputSection message={message} setMessage={setMessage} setResults={setResults}/>
      <OutputSection sentimentArray={results}/>

    </div>
  );
};

export default HomePage;
