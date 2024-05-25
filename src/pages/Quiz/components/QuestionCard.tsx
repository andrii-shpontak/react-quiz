import React, { useState } from 'react';

import type { QuestionCardProps } from '../../../shared/types';

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, totalQuestions, onNext }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isConfirmed && !!value) {
      setSelectedOption(Number(value));
    }
  };

  const handleConfirm = () => {
    if (selectedOption !== null) {
      const correct = question.correct_answers.includes(selectedOption);
      setIsCorrect(correct);
      setIsConfirmed(true);
    }
  };

  return (
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
            <label className='flex items-center cursor-pointer'>
              <input
                type='radio'
                name={`question-${question.id}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={handleOptionChange}
                className='mr-2'
                disabled={isConfirmed}
              />
              {option.text}
            </label>
          </li>
        ))}
      </ul>
      {!isConfirmed ? (
        <button onClick={handleConfirm} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4'>
          Confirm
        </button>
      ) : (
        <button onClick={onNext} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4'>
          Next
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
