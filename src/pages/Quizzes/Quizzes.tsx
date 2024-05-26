import { Header, Loader } from '../../shared/components';
import React, { useCallback, useState } from 'react';

import { RequestState } from '../../shared/constants/RequestState';
import { getQuizResultData } from '../../shared/helpers/getQuizResultData';
import { useQuizHistory } from '../../shared/hooks/useQuizHistory';

const Quizzes: React.FC = () => {
  const [expandedQuizIndex, setExpandedQuizIndex] = useState<number | null>(null);

  const { quizInHistory, requestStatus } = useQuizHistory();

  const toggleExpand = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const index = event.currentTarget.getAttribute('data-index');
      !!index && setExpandedQuizIndex(expandedQuizIndex === Number(index) ? null : Number(index));
    },
    [setExpandedQuizIndex, expandedQuizIndex],
  );

  return (
    <>
      <div>
        <Header title='Quizzes History' />
        {!!quizInHistory ? (
          quizInHistory.map((quiz, index) => {
            const { percentageColor, percentage, correctOfAll, elapsedTime } = getQuizResultData(quiz);
            return (
              <div key={index} className='border border-gray-200 rounded m-3'>
                <div className='p-4 cursor-pointer' data-index={index} onClick={toggleExpand}>
                  <h3 className='text-lg font-semibold'>{quiz.title}</h3>
                </div>
                <div className={`p-4 bg-gray-100 ${expandedQuizIndex === index ? '' : 'hidden'}`}>
                  <p className='text-xl mb-2'>Date: {quiz.date}</p>
                  <p className='text-xl mb-2'>Time Taken: {elapsedTime}</p>
                  <p className={`text-xl font-bold mb-2 ${percentageColor}`}>Percentage: {percentage}%</p>
                  <p className='text-xl mb-2'>Correct Answers: {correctOfAll}</p>
                  <p className='text-xl mb-2'>Time Taken: {elapsedTime} seconds</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className='m-3 p-4 border border-gray-200 rounded bg-yellow-100 text-yellow-800'>
            <p className='text-lg'>You haven't completed any quizzes yet.</p>
            <p>Start a quiz to see your history here.</p>
          </div>
        )}
      </div>
      {requestStatus === RequestState.Pending && <Loader />}
    </>
  );
};

export default Quizzes;
