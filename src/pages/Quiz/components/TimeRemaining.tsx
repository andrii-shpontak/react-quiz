import type { TTimeRemainingProps } from '../../../shared/types';
import { useCountdown } from '../../../shared/hooks/useCountdown';

const TimeRemaining = ({ timeLimit, onStart, onStop }: TTimeRemainingProps) => {
  const { minutesLeft, secondsLeft } = useCountdown(timeLimit);

  return (
    <div className='flex justify-center items-center mt-4'>
      <div className='text-red-500 font-bold mb-4 text-2xl'>
        Time remaining: {minutesLeft}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
      </div>
    </div>
  );
};

export default TimeRemaining;
