import type { TQuiz } from '../types';

export const categories = ['Frontend', 'Backend', 'Devops'] as const;

export const difficulties = ['simple', 'medium', 'difficult'] as const;

export const initialValues: TQuiz = {
  title: '',
  timeLimit: 1,
  category: categories[0],
  difficulty: difficulties[0],
  custom: true,
  questions: [
    {
      id: 1,
      text: '',
      options: [{ id: 1, text: '' }],
      correct_answers: [],
    },
  ],
};
