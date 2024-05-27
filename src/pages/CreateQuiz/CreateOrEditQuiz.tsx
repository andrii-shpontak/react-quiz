import { Header, Loader } from '../../shared/components';
import React, { useMemo } from 'react';
import { useHandlers, useQuizValidation } from './hooks';

import { Formik } from 'formik';
import QuizForm from './component/QuizForm';
import { RequestState } from '../../shared/constants/RequestState';
import type { TQuiz } from '../../shared/types';
import { initialValues } from '../../shared/constants/quizData';
import { useGetQuizByTitle } from '../../shared/hooks/useGetQuizByTitle';
import { useParams } from 'react-router-dom';
import { useQuizzesData } from '../../shared/hooks';

const CreateOrEditQuiz: React.FC = () => {
  const { id } = useParams();
  const validationSchema = useQuizValidation();
  const { quizzesData, requestStatus: dataStatus } = useQuizzesData({});
  const { currentQuiz } = useGetQuizByTitle({ id, data: quizzesData });
  const { handleSubmit, requestStatus } = useHandlers({ id, quizzesData, currentQuiz });

  const startValue = useMemo(() => (!!id ? currentQuiz : initialValues), [currentQuiz, id]);

  const title = useMemo(() => (!!id ? 'Edit Quiz Page' : 'Create Quiz Page'), [id]);

  return (
    <div>
      <Header title={title} />
      {!!startValue && (
        <Formik<TQuiz> initialValues={startValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <QuizForm isEditPage={!!id} />
        </Formik>
      )}
      {(requestStatus === RequestState.Pending || dataStatus === RequestState.Pending) && <Loader />}
    </div>
  );
};

export default CreateOrEditQuiz;
