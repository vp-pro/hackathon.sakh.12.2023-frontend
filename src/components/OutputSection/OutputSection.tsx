
import { PiSmiley, PiSmileySad, PiSmileyBlank, PiQuestion } from 'react-icons/pi';
import { MdOutlineWavingHand } from 'react-icons/md';
import { IconContext } from 'react-icons';

interface BlueLargeIconProps {
  icon: React.ReactElement;
}

function IconWrapper({ icon }: BlueLargeIconProps) {
  return (
    <IconContext.Provider
      value={{ color: 'blue', size: '20px' }}
    > 
      <div>
        {icon}
      </div>
    </IconContext.Provider>
  );
}

const OutputSection: React.FC = () => {

  return (
    <div>
        <IconWrapper icon={<PiSmiley />} />
        <IconWrapper icon={<PiSmileyBlank />} />
        <IconWrapper icon={<PiSmileySad />} />
        <IconWrapper icon={<MdOutlineWavingHand />} />
        <IconWrapper icon={<PiQuestion />} />   
    </div>
  );
};

export default OutputSection;
