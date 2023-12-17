import React from 'react';
import { PiSmiley, PiSmileySad, PiSmileyBlank, PiQuestion } from 'react-icons/pi';
import { MdOutlineWavingHand } from 'react-icons/md';
import { CircularProgress } from '@mui/material';
import styles from './OutputSection.module.css';
import { EmojiChart } from '../EmojiChart/EmojiChart';
import { ISentimentArray } from '../../utils/types';

interface IOutputSection {
  functionalSentiment: ISentimentArray;
  emotionalSentiment: string;
  languageDetected: string;
  functionalSentimentLoading: boolean;
  emotionalSentimentLoading: boolean;
  languageDetectedLoading: boolean;
}

const OutputSection: React.FC<IOutputSection> = ({
  functionalSentiment,
  emotionalSentiment,
  languageDetected,
  functionalSentimentLoading,
  emotionalSentimentLoading,
  languageDetectedLoading,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.functionalSection}>
        <h1 className={styles.title}>Функциональный анализ тональности</h1>
        {functionalSentimentLoading && <div className={styles.loadingOverlay}></div>}
        {functionalSentimentLoading && (
          <div className={styles.loadingIndicator}>
            <CircularProgress />
          </div>
        )}
        <div className={styles.functionalList}>
          {functionalSentiment?.functionalSentiment && (
            <>
              <EmojiChart icon={<PiSmiley />} num={functionalSentiment.functionalSentiment.positive} color={`rgba(0, 200, 0, ${functionalSentiment.functionalSentiment.positive + 0.3})`} text='Позитивное сообщение' />
              <EmojiChart icon={<PiSmileyBlank />} num={functionalSentiment.functionalSentiment.neutral} color={`rgba(90, 90, 90, ${functionalSentiment.functionalSentiment.neutral + 0.3})`} text='Нейтральное сообщение' />
              <EmojiChart icon={<PiSmileySad />} num={functionalSentiment.functionalSentiment.negative} color={`rgba(180, 0, 0, ${functionalSentiment.functionalSentiment.negative + 0.3})`} text='Негативное сообщение' />
              <EmojiChart icon={<MdOutlineWavingHand />} num={functionalSentiment.functionalSentiment.speech} color={`rgba(0, 0, 140, ${functionalSentiment.functionalSentiment.speech + 0.3})`} text='Управление коммуникацией' />
              <EmojiChart icon={<PiQuestion />} num={functionalSentiment.functionalSentiment.skip} color={`rgba(80, 80, 80, ${functionalSentiment.functionalSentiment.skip + 0.3})`} text='Тональность сообщения не определена' />
            </>
          )}
        </div>
      </div>

      <div className={styles.emotionalSection}>
      <h1>Эмоциональный анализ тональности</h1>
        {emotionalSentimentLoading && <div className={styles.loadingOverlay}></div>}
        {emotionalSentimentLoading && (
          <div className={styles.loadingIndicator}>
            <CircularProgress />
          </div>
        )}
        <div className={styles.functionalList}>
          {emotionalSentiment ? emotionalSentiment: '\u00A0'}
          </div>
      </div>

      <div className={styles.languageSection}>
        <h1>Язык сообщения</h1>
        {languageDetectedLoading && <div className={styles.loadingOverlay}></div>}
        {languageDetectedLoading && (
          <div className={styles.loadingIndicator}>
            <CircularProgress />
          </div>
        )}
        <div className={styles.functionalList}>
          {languageDetected ? languageDetected: '\u00A0'}
          </div>
      </div>
    </section>
  );
};

export default OutputSection;
