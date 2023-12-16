import React from 'react';

import { IconContext } from 'react-icons';
import styles from './EmojiChart.module.css';
import { LinearProgress, linearProgressClasses  } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ChartProps {
  color: string;
  num: number;
}

const Chart: React.FC<ChartProps> = ({ color, num }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: '10px',
    borderRadius: 10,
    width: '200px',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#dedede',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: color,
    },
  }));

  return <BorderLinearProgress variant="determinate" value={num} sx={{color: color}}/>;
};

interface EmojiChartProps {
  icon: React.ReactElement;
  num: number;
  color: string;
  text: string;
}

export const  EmojiChart = ({icon, num, color, text}: EmojiChartProps) => {
  return (
      <div className={styles.sentimentElement}>
          <IconContext.Provider value={{ color: color, size: '50px' }}>
              <div className={styles.iconContainer}>{icon}</div>
          </IconContext.Provider>

          <p className={styles.text}>{text}</p>
          <Chart num={Math.round(num * 100)} color={color}/>

          
          {/* <CircularProgress 
          variant="determinate" 
          value={Math.round(num * 100)} 
          size={50}
          sx={{
              color: color,
              position: 'relative',
              top: -2,
              left: -50,
              zIndex: 1,
            }}
             /> */}

          {/* <LinearProgress
            variant="determinate"
            value={Math.round(num * 100)}
            // color={color}
            className={styles.progressBar} // Add styles to make it visible
          /> */}
      </div>
  )
}