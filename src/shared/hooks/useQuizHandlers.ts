import { LocalStorageKeys } from '../constants/LocalStorageKeys';
import { LocalStorageService } from '../../services/localStorageService';
import type { TUseQuizHandlersProps } from '../types';
import { useCallback } from 'react';

export function useQuizHandlers({ quizzesData }: TUseQuizHandlersProps) {
  const onDeleteQuiz = useCallback(
    (quizToDeleteTitle: string) => {
      const quizToDelete = quizzesData.find(quiz => quiz.title === quizToDeleteTitle);
      if (!quizToDelete) return;
      if (quizToDelete.custom) {
        const filteredQuizzes = quizzesData.filter(quiz => quiz.custom && quiz.title !== quizToDeleteTitle);
        LocalStorageService.setItem(LocalStorageKeys.Quizzes, JSON.stringify(filteredQuizzes));
      } else {
        const hiddenQuizzesInStorage = LocalStorageService.getItem(LocalStorageKeys.HiddenQuizzes);
        const hiddenQuizzes = hiddenQuizzesInStorage ? (JSON.parse(hiddenQuizzesInStorage) as string[]) : [];
        hiddenQuizzes.push(quizToDeleteTitle);
        LocalStorageService.setItem(LocalStorageKeys.HiddenQuizzes, JSON.stringify(hiddenQuizzes));
      }
      window.location.reload();
    },
    [quizzesData],
  );

  return { onDeleteQuiz };
}
