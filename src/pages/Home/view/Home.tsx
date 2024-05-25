import { Header } from '../../../shared/components';
import { Link } from 'react-router-dom'; // Імпорт компонента Link для навігації
import React from 'react';
import type { TQuiz } from '../../../shared/types';
import { quizzes } from '../../../shared/data/quizzes';

const Home: React.FC = () => {
  return (
    <>
      <Header title='Home page' />
      <section className='flex items-center h-screen mt-4 flex-col'>
        <h2>Select a Quiz to Get Started!</h2>
        <div className='mt-8'>
          {quizzes.map((quiz: TQuiz, index: number) => (
            <div key={index} className='my-4'>
              <Link to={`/quiz/${quiz.title}`} className='text-blue-500 hover:underline'>
                {quiz.title}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
