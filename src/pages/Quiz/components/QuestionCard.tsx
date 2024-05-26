import QuizResultsModal from './QuizResultsModal';
import React from 'react';
import type { TQuestionCardProps } from '../../../shared/types';
import TimeRemaining from './TimeRemaining';
import { useQuestionHandlers } from '../hooks/useQuestionHandlers';

const QuestionCard: React.FC<TQuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onNext,
  quizTitle,
  timeLimit,
}) => {
  const {
    isConfirmed,
    isCorrect,
    selectedOption,
    handleOptionChange,
    handleConfirm,
    handleNextClick,
    isFinished,
    endResult,
  } = useQuestionHandlers({ question, questionNumber, totalQuestions, onNext, quizTitle });

  return (
    <>
      <TimeRemaining timeLimit={timeLimit} isFinished={isFinished} />
      <div
        className={`p-6 rounded-lg shadow-md border w-full max-w-xl mx-auto ${
          isConfirmed ? (isCorrect ? 'bg-green-100' : 'bg-red-100') : 'bg-white'
        } mb-6`}>
        <h3 className='text-xl font-bold mb-4'>
          Question {questionNumber} of {totalQuestions}
        </h3>
        <p className='text-gray-800 mb-4'>{question.text}</p>
        <ul>
          {question.options.map(option => (
            <li key={option.id} className='mb-2'>
              <label className='flex items-center cursor-pointer w-full'>
                <span
                  className={`inline-block flex items-center p-2 border rounded-lg shadow-sm transition-colors ${
                    selectedOption === option.id ? 'bg-gray-300' : 'bg-gray-100'
                  } ${
                    isConfirmed ? (selectedOption === option.id ? (isCorrect ? 'bg-green-100' : 'bg-red-100') : '') : ''
                  } hover:bg-gray-200 w-full`}
                  style={{ pointerEvents: isConfirmed ? 'none' : 'auto' }}>
                  <input
                    type='radio'
                    name={`question-${question.id}`}
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={handleOptionChange}
                    disabled={isConfirmed}
                    className='mx-3'
                  />
                  {option.text}
                </span>
              </label>
            </li>
          ))}
        </ul>
        {!isConfirmed ? (
          <button onClick={handleConfirm} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4'>
            Confirm
          </button>
        ) : (
          <button onClick={handleNextClick} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4'>
            {questionNumber === totalQuestions ? 'Finish' : 'Next'}
          </button>
        )}
      </div>

      {!!endResult && <QuizResultsModal endResult={endResult} />}
    </>
  );
};

export default QuestionCard;
