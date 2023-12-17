import React from 'react';
import { PiSmiley, PiSmileySad, PiSmileyBlank, PiQuestion } from 'react-icons/pi';
import { MdOutlineWavingHand } from 'react-icons/md';
import { IconContext } from 'react-icons';
import ProgressBar from "@ramonak/react-progress-bar";
import { ISentimentArray } from '../../utils/types';
import styles from './OutputSection.module.css';
import { LinearProgress, CircularProgress, linearProgressClasses  } from '@mui/material';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { EmojiChart } from '../EmojiChart/EmojiChart';



interface IOutputSection {
  functionalSentiment: ISentimentArray;
}

const OutputSection: React.FC<IOutputSection> = ({ functionalSentiment }) => {
  if (functionalSentiment.functionalSentiment === null) {
    return <div>No data available</div>;
  } else {
    const { positive, neutral, negative, speech, skip } = functionalSentiment.functionalSentiment;

    const positiveColor = `rgba(0, 200, 0, ${positive+0.3})`;
    const neutralColor = `rgba(90, 90, 90, ${neutral+0.3})`;
    const negativeColor = `rgba(180, 0, 0, ${negative+0.3})`;
    const speechColor = `rgba(0, 0, 140, ${speech+0.3})`;
    const skipColor = `rgba(80, 80, 80, ${skip+0.3})`;

    return (
      <section className={styles.container}>
        <div className={styles.functionalSection}> 
          <h1>Функциональный анализ тональности</h1>
          <div className={styles.functionalList}>
            <EmojiChart icon={<PiSmiley />} num={positive} color={positiveColor} text='Позитивное сообщение'/>
            <EmojiChart icon={<PiSmileyBlank />} num={neutral} color={neutralColor} text='Нейтральное сообщение'/>
            <EmojiChart icon={<PiSmileySad/>} num={negative} color={negativeColor} text='Негативное сообщение'/>
            <EmojiChart icon={< MdOutlineWavingHand/>} num={speech} color={speechColor} text='Управление коммуникацией'/>
            <EmojiChart icon={< PiQuestion/>} num={skip} color={skipColor} text='Тональность сообщения не определена'/>
          </div>
        </div>

        <div className={styles.functionalSection}> 
          <h1>Эмоциональный анализ тональности</h1>
          <div className={styles.functionalList}>
            <EmojiChart icon={<PiSmiley />} num={positive} color={positiveColor} text='Позитивное сообщение'/>
            <EmojiChart icon={<PiSmileyBlank />} num={neutral} color={neutralColor} text='Нейтральное сообщение'/>
            <EmojiChart icon={<PiSmileySad/>} num={negative} color={negativeColor} text='Негативное сообщение'/>
            <EmojiChart icon={< MdOutlineWavingHand/>} num={speech} color={speechColor} text='Управление коммуникацией'/>
            <EmojiChart icon={< PiQuestion/>} num={skip} color={skipColor} text='Тональность сообщения не определена'/>
          </div>
        </div>
      </section>
    );
  }
};

export default OutputSection;
