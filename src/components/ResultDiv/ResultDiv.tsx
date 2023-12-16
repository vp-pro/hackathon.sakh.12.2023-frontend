import React from 'react';

interface ResultDivProps {
  emoji: string;
  probability: number;
}

const ResultDiv: React.FC<ResultDivProps> = ({ emoji, probability }) => {
  return (
    <div>
      <span>{emoji}</span>
      <div>{probability}%</div>
    </div>
  );
};

export default ResultDiv;