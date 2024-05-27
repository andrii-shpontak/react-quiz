import { Header, Loader } from '../../shared/components';
import React, { useCallback, useState } from 'react';
import { useQuizHandlers, useQuizzesData } from '../../shared/hooks';

import { AbsoluteRoutes } from '../../shared/constants/AbsoluteRoutes';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { RequestState } from '../../shared/constants/RequestState';

const Home: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [quizToDelete, setQuizToDelete] = useState<string | null>(null);

  const { quizzesData, requestStatus } = useQuizzesData({});
  const { onDeleteQuiz } = useQuizHandlers({ quizzesData });

  const handleDeleteQuiz = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const quizTitle = event.currentTarget.getAttribute('data-delete');
    setQuizToDelete(quizTitle);
    setPopupVisible(true);
  }, []);

  const cancelDeleteQuiz = useCallback(() => {
    setPopupVisible(false);
    setQuizToDelete(null);
  }, []);

  const confirmDeleteQuiz = useCallback(() => {
    if (quizToDelete) {
      onDeleteQuiz(quizToDelete);
      cancelDeleteQuiz();
    }
  }, [quizToDelete, cancelDeleteQuiz, onDeleteQuiz]);

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
                className='p-5 pr-10 border border-gray-300 rounded-md shadow-md transition-colors hover:bg-gray-50 relative group'>
                <Link to={`${AbsoluteRoutes.QUIZ_PAGE}/${quiz.title}`} className='block text-blue-500 hover:underline'>
                  {quiz.title}
                </Link>
                <div className='absolute h-full p-1 top-0 right-0  opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center  justify-between'>
                  <Link
                    to={`${AbsoluteRoutes.EDIT_QUIZ}/${quiz.title}`}
                    className='block text-blue-500 hover:underline'>
                    <EditIcon className='h-6 w-6' />
                  </Link>
                  <button data-delete={quiz.title} onClick={handleDeleteQuiz}>
                    <DeleteIcon className='h-6 w-6' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {isPopupVisible && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Are you sure you want to delete this quiz?</h2>
            <div className='flex justify-end'>
              <button
                onClick={cancelDeleteQuiz}
                className='px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mr-2'>
                Cancel
              </button>
              <button onClick={confirmDeleteQuiz} className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
