import type { TQuiz, TQuizFormHandlers } from '../../../shared/types';
import { useCallback, useState } from 'react';

import { AbsoluteRoutes } from '../../../shared/constants/AbsoluteRoutes';
import { LocalStorageKeys } from '../../../shared/constants/LocalStorageKeys';
import { LocalStorageService } from '../../../services/localStorageService';
import { RequestState } from '../../../shared/constants/RequestState';
import { requestDelay } from '../../../shared/helpers/randomDelay';
import { useNavigate } from 'react-router-dom';

export function useHandlers({ id, quizzesData, currentQuiz }: TQuizFormHandlers) {
  const [requestStatus, setStatus] = useState<RequestState>(RequestState.Idle);
  const navigate = useNavigate();

  const handleCreateNewQuiz = useCallback(
    async (values: TQuiz) => {
      setStatus(RequestState.Pending);
      try {
        await new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            try {
              const storedQuizzes = LocalStorageService.getItem(LocalStorageKeys.Quizzes);
              const quizzes = storedQuizzes ? (JSON.parse(storedQuizzes) as TQuiz[]) : [];
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

  const handleEditQuiz = useCallback(
    async (values: TQuiz) => {
      setStatus(RequestState.Pending);
      try {
        await new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            if (!currentQuiz) return;
            try {
              const storedQuizzes = LocalStorageService.getItem(LocalStorageKeys.Quizzes);
              const quizzes = storedQuizzes ? (JSON.parse(storedQuizzes) as TQuiz[]) : [];
              if (currentQuiz.custom) {
                const filteredQuizzes = quizzes.filter(quiz => quiz.title !== currentQuiz.title);
                const newQuizzes = [...filteredQuizzes, values];
                LocalStorageService.setItem(LocalStorageKeys.Quizzes, JSON.stringify(newQuizzes));
              } else {
                const hiddenQuizzesInStorage = LocalStorageService.getItem(LocalStorageKeys.HiddenQuizzes);
                const hiddenQuizzes = hiddenQuizzesInStorage ? (JSON.parse(hiddenQuizzesInStorage) as string[]) : [];
                hiddenQuizzes.push(currentQuiz.title);
                LocalStorageService.setItem(LocalStorageKeys.HiddenQuizzes, JSON.stringify(hiddenQuizzes));
                const newQuizzes = [...quizzes, values];
                LocalStorageService.setItem(LocalStorageKeys.Quizzes, JSON.stringify(newQuizzes));
              }
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
    [navigate, currentQuiz],
  );

  return { handleSubmit: !!id ? handleEditQuiz : handleCreateNewQuiz, requestStatus };
}
