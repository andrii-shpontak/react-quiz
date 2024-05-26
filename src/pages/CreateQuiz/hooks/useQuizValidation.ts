import * as Yup from 'yup';

import { categories, difficulties } from '../../../shared/constants/quizData';

import { useMemo } from 'react';

export function useQuizValidation() {
  return useMemo(() => {
    return Yup.object({
      title: Yup.string().required('Title is required'),
      timeLimit: Yup.number().required('Time limit is required').positive('Must be positive'),
      category: Yup.string().oneOf(categories).required('Category is required'),
      difficulty: Yup.string().oneOf(difficulties).required('Difficulty is required'),
      questions: Yup.array()
        .of(
          Yup.object({
            text: Yup.string().required('Question is required'),
            options: Yup.array()
              .of(
                Yup.object({
                  text: Yup.string().required('Question is required'),
                }),
              )
              .min(1, 'Must have at least one option')
              .required('Question is required'),
            correct_answers: Yup.array()
              .of(Yup.number())
              .min(1, 'Must have at least one correct answer')
              .required('Must have at least one correct answer'),
          }),
        )
        .min(1, 'Must have at least one question'),
    });
  }, []);
}
