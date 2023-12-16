import React from 'react';

interface EmojiChartDivProps {
  emoji: string;
  chartData: number[];
}

const EmojiChartDiv: React.FC<EmojiChartDivProps> = ({ emoji, chartData }) => {
  return (
    <div>
      <span>{emoji}</span>
      <div>
        {/* Implement your chart using chartData */}
        {chartData.map((value, index) => (
          <div key={index} style={{ height: `${value}px`, background: 'blue', margin: '2px' }} />
        ))}
      </div>
    </div>
  );
};

export default EmojiChartDiv;
