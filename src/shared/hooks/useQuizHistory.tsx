import { useCallback, useEffect, useState } from 'react';

import { LocalStorageKeys } from '../constants/LocalStorageKeys';
import { LocalStorageService } from '../../services/localStorageService';
import { RequestState } from '../constants/RequestState';
import type { TAnswersObject } from '../types';
import { requestDelay } from '../helpers/randomDelay';

export function useQuizHistory() {
  const [quizInHistory, setQuizInHistory] = useState<TAnswersObject[] | null>(null);
  const [requestStatus, setStatus] = useState<RequestState>(RequestState.Idle);

  const getQuizHistory = useCallback(async () => {
    setStatus(RequestState.Pending);
    try {
      const response = await new Promise<TAnswersObject[] | null>(resolve => {
        const answerInStorage = LocalStorageService.getItem(LocalStorageKeys.Answers);
        const storedAnswers = answerInStorage ? (JSON.parse(answerInStorage) as TAnswersObject[]) : null;
        setTimeout(() => resolve(storedAnswers), requestDelay);
      });

      !!response && setQuizInHistory(response);
      setStatus(RequestState.Success);
    } catch (error) {
      console.error('Failed to fetch quizzes:', error);
      setStatus(RequestState.Error);
    }
  }, [setStatus, setQuizInHistory]);

  useEffect(() => {
    getQuizHistory();
    // only when mounting the component
    // eslint-disable-next-line
  }, []);

  return { quizInHistory, requestStatus };
}
