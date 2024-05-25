import { Header, Loader } from '../../../shared/components';

import { QuizInProcess } from '../components';
import React from 'react';
import { RequestState } from '../../../shared/constants/RequestState';
import { useData } from '../hooks/useData';
import { useParams } from 'react-router-dom';
import { useQuizzesData } from '../../../shared/hooks/useQuizzesData';

const Quiz: React.FC = () => {
  const { id } = useParams();
  const { quizzesData, requestStatus } = useQuizzesData({});
  const { currentQuiz } = useData({ id, data: quizzesData });

  return (
    <>
      <Header title={!!id ? `Quiz #${id}` : ''} />
      {requestStatus === RequestState.Pending && <Loader />}
      {!!currentQuiz && <QuizInProcess quizInfo={currentQuiz} />}
    </>
  );
};

export default Quiz;
