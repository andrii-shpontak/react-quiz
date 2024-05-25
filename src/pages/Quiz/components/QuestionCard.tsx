import type { QuestionCardProps, TAnswer, TAnswersObject } from '../../../shared/types';
import React, { useCallback, useState } from 'react';

import { LocalStorageKeys } from '../../../shared/constants/LocalStorageKeys';
import { LocalStorageService } from '../../../services/localStorageService';

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, totalQuestions, onNext, quizTitle }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answers, setAnswers] = useState<TAnswer[]>([]);

  const handleOptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (!isConfirmed && !!value) {
        setSelectedOption(Number(value));
      }
    },
    [setSelectedOption, isConfirmed],
  );

  const handleConfirm = useCallback(() => {
    if (selectedOption !== null) {
      const correct = question.correct_answers.includes(selectedOption);
      setIsCorrect(correct);
      setIsConfirmed(true);
      setAnswers(state => [...state, { questionId: questionNumber, answerId: selectedOption, correct }]);
    }
  }, [setIsConfirmed, setIsCorrect, question, selectedOption, setAnswers, questionNumber]);

  const handleNextClick = useCallback(() => {
    if (questionNumber === totalQuestions) {
      const currentDate = new Date().toISOString().split('.')[0];
      const storedAnswers = LocalStorageService.getItem(LocalStorageKeys.Answers);
      const existingAnswers = storedAnswers ? (JSON.parse(storedAnswers) as TAnswersObject[]) : [];
      const allAnswers = [...existingAnswers, { title: quizTitle, date: currentDate, answers: answers }];
      console.log(allAnswers);
      LocalStorageService.setItem(LocalStorageKeys.Answers, JSON.stringify(allAnswers));
    }
    onNext();
    setSelectedOption(null);
    setIsConfirmed(false);
    setIsCorrect(false);
  }, [answers, questionNumber, totalQuestions, onNext, quizTitle]);

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
  );
};

export default QuestionCard;
