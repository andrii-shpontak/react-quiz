import type { TQuiz, TUseQuizzesDataProps } from '../types';
import { useCallback, useEffect, useState } from 'react';

import { RequestState } from '../constants/RequestState';
import { quizzes } from '../data/quizzes';
import { requestDelay } from '../helpers/randomDelay';

export function useQuizzesData({ id }: TUseQuizzesDataProps) {
  const [quizzesData, setQuizzes] = useState<TQuiz[]>([]);
  const [requestStatus, setStatus] = useState<RequestState>(RequestState.Idle);

  const getQuizzes = useCallback(async () => {
    setStatus(RequestState.Pending);
    try {
      const response = await new Promise<TQuiz[]>(resolve => {
        setTimeout(() => resolve(quizzes), requestDelay);
      });

      setQuizzes(response);
      setStatus(RequestState.Success);
    } catch (error) {
      console.error('Failed to fetch quizzes:', error);
      setStatus(RequestState.Error);
    }
  }, []);

  useEffect(() => {
    getQuizzes();
    // only when mounting the component
    // eslint-disable-next-line
  }, []);

  return { quizzesData, requestStatus };
}
