import { useCallback, useState } from 'react';

import { AbsoluteRoutes } from '../../../shared/constants/AbsoluteRoutes';
import { LocalStorageKeys } from '../../../shared/constants/LocalStorageKeys';
import { LocalStorageService } from '../../../services/localStorageService';
import { RequestState } from '../../../shared/constants/RequestState';
import type { TQuizFormValues } from '../../../shared/types';
import { requestDelay } from '../../../shared/helpers/randomDelay';
import { useNavigate } from 'react-router-dom';

export function useHandlers() {
  const [requestStatus, setStatus] = useState<RequestState>(RequestState.Idle);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values: TQuizFormValues) => {
      setStatus(RequestState.Pending);
      try {
        await new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            try {
              const storedQuizzes = LocalStorageService.getItem(LocalStorageKeys.Quizzes);
              const quizzes = storedQuizzes ? (JSON.parse(storedQuizzes) as TQuizFormValues[]) : [];
              const newQuizzes = [...quizzes, values];
              LocalStorageService.setItem(LocalStorageKeys.Quizzes, JSON.stringify(newQuizzes));
              setStatus(RequestState.Success);
              resolve();
            } catch (error) {
              console.error('Error while saving quiz:', error);
              setStatus(RequestState.Error);
              reject(error);
            }
          }, requestDelay);
        });
        navigate(AbsoluteRoutes.HOME);
      } catch (error) {
        console.error('Error while saving quiz:', error);
        throw error;
      }
    },
    [navigate],
  );

  return { handleSubmit, requestStatus };
}
