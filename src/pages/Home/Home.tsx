import React, { useState, useEffect } from 'react';
import InputSection from '../../components/InputSection/InputSection';
import EmojiChartDiv from '../../components/EmojiChart/EmojiChart';
import styles from './Home.module.css'

const HomePage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [results, setResults] = useState<Array<{probability: number;}>>([]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(JSON.stringify({ message: [message] }))
    try {
      const response = await fetch('https://api.panferov.site/v1/sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: [message] }),
      });

      const data = await response.json();
      console.log(data)
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <div className={styles.container}>
      <InputSection message={message} setMessage={setMessage} setResults={setResults}/>

    
    </div>
  );
};

export default HomePage;
