import React, { useState } from 'react';

import { Header } from '../../shared/components';

const Quizzes: React.FC = () => {
  // temporary data
  const quizHistory = [
    { title: 'Quiz 1', date: '2024-05-28', elapsedTime: '2:30', correctAnswers: 7, totalQuestions: 10 },
    { title: 'Quiz 2', date: '2024-05-27', elapsedTime: '1:45', correctAnswers: 5, totalQuestions: 10 },
    { title: 'Quiz 3', date: '2024-05-26', elapsedTime: '3:00', correctAnswers: 8, totalQuestions: 10 },
  ];

  const [expandedQuizIndex, setExpandedQuizIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedQuizIndex(expandedQuizIndex === index ? null : index);
  };

  return (
    <div>
      <Header title='Quizzes History' />
      {quizHistory.map((quiz, index) => (
        <div key={index} className='border border-gray-200 rounded m-3'>
          <div className='p-4 cursor-pointer' onClick={() => toggleExpand(index)}>
            <h3 className='text-lg font-semibold'>{quiz.title}</h3>
          </div>
          <div className={`p-4 bg-gray-100 ${expandedQuizIndex === index ? '' : 'hidden'}`}>
            <p>Date: {quiz.date}</p>
            <p>Time Taken: {quiz.elapsedTime}</p>
            <p>
              Correct Answers: {quiz.correctAnswers} / {quiz.totalQuestions}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quizzes;
