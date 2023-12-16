import React, { useState, useEffect } from 'react';
import InputSection from '../components/InputSection/InputSection';
import ResultDiv from '../components/ResultDiv/ResultDiv';
import EmojiChartDiv from '../components/EmojiChart/EmojiChart';

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <InputSection value={message} setMessage={setMessage} />
        <button type="submit">Submit</button>
      </form>

      {/* <div style={{ display: 'flex' }}>
        {results.map((result, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <ResultDiv emoji={result.emoji} probability={result.probability} />
            <EmojiChartDiv emoji={result.emoji} chartData={[50, 30, 80, 20, 60]} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
