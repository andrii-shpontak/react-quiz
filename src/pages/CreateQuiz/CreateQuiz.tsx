import { Header, Loader } from '../../shared/components';
import { useHandlers, useQuizValidation } from './hooks';

import CreateForm from './component/CreateForm';
import { Formik } from 'formik';
import React from 'react';
import { RequestState } from '../../shared/constants/RequestState';
import type { TQuizFormValues } from '../../shared/types';
import { initialValues } from '../../shared/constants/quizData';

const CreateQuiz: React.FC = () => {
  const validationSchema = useQuizValidation();
  const { handleSubmit, requestStatus } = useHandlers();

  return (
    <div>
      <Header title='Create Quiz Page' />
      <Formik<TQuizFormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <CreateForm />
      </Formik>
      {requestStatus === RequestState.Pending && <Loader />}
    </div>
  );
};

export default CreateQuiz;
