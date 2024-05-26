import type { TTimeRemainingProps } from '../../../shared/types';
import { useCountdown } from '../../../shared/hooks/useCountdown';

// need to process a case in which the time has already run out and the quiz has not yet been completed

const TimeRemaining = ({ timeLimit, isFinished }: TTimeRemainingProps) => {
  const { minutesLeft, secondsLeft } = useCountdown(timeLimit, isFinished);

  return (
    <div className='flex justify-center items-center mt-4'>
      <div className={`text-${isFinished ? 'green' : 'red'}-500 font-bold mb-4 text-2xl`}>
        Time remaining: {minutesLeft}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
      </div>
    </div>
  );
};

export default TimeRemaining;
