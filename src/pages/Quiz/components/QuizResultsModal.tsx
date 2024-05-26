import { AbsoluteRoutes } from '../../../shared/constants/AbsoluteRoutes';
import type { TAnswersObject } from '../../../shared/types';
import { getQuizResultData } from '../../../shared/helpers/getQuizResultData';
import { useNavigate } from 'react-router-dom';

const QuizResultsModal = ({ endResult }: { endResult: TAnswersObject }) => {
  const { percentageColor, percentage, correctOfAll, elapsedTime } = getQuizResultData(endResult);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(AbsoluteRoutes.HOME);
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
        <h3 className='text-xl font-bold mb-4'>Quiz Results</h3>
        <p className={`text-2xl font-bold mb-4 ${percentageColor}`}>Percentage: {percentage}%</p>
        <p className='text-xl mb-4'>Correct Answers: {correctOfAll}</p>
        <p className='text-xl mb-4'>Time Taken: {elapsedTime} seconds</p>
        <button onClick={handleClose} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
          Close
        </button>
      </div>
    </div>
  );
};

export default QuizResultsModal;
