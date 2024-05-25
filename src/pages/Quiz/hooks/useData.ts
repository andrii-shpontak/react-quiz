import type { TQuiz, TQuizUseDataProps } from '../../../shared/types';
import { useEffect, useState } from 'react';

export function useData({ id, data }: TQuizUseDataProps) {
  const [currentQuiz, setCurrentQuiz] = useState<TQuiz | null>(null);

  useEffect(() => {
    if (id && data && data.length > 0) {
      const quiz = data.find(quiz => quiz.title === id);
      !!quiz ? setCurrentQuiz(quiz) : console.error(`Quiz with id ${id} not found.`);
    }
  }, [data, id]);

  return { currentQuiz };
}
