import { Header, Loader } from '../../shared/components';

import { AbsoluteRoutes } from '../../shared/constants/AbsoluteRoutes';
import { Link } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import React from 'react';
import { RequestState } from '../../shared/constants/RequestState';
import { useQuizzesData } from '../../shared/hooks/useQuizzesData';

const Home: React.FC = () => {
  const { quizzesData, requestStatus } = useQuizzesData({});

  return (
    <>
      <Header title='Home page' />
      {requestStatus === RequestState.Pending ? (
        <Loader />
      ) : (
        <section className='flex items-center h-screen mt-4 flex-col'>
          <h2 className='text-2xl font-semibold mb-4'>Select a Quiz to Get Started!</h2>
          <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='p-4 border border-gray-300 rounded-md shadow-md transition-colors hover:bg-gray-50'>
              <Link
                to={AbsoluteRoutes.CREATE_QUIZ}
                className='block text-blue-500 hover:underline h-full w-full flex items-center justify-center'>
                <PlusIcon className='h-5 w-5' />
              </Link>
            </div>
            {quizzesData.map((quiz, index) => (
              <div
                key={index}
                className='p-4 border border-gray-300 rounded-md shadow-md transition-colors hover:bg-gray-50'>
                <Link to={`${AbsoluteRoutes.QUIZ_PAGE}/${quiz.title}`} className='block text-blue-500 hover:underline'>
                  {quiz.title}
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
