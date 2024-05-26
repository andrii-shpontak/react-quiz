import type { TAnswer, TAnswersObject, TQuestionCardProps } from '../../../shared/types';
import { useCallback, useState } from 'react';

import { LocalStorageKeys } from '../../../shared/constants/LocalStorageKeys';
import { LocalStorageService } from '../../../services/localStorageService';

export function useQuestionHandlers({
  question,
  questionNumber,
  totalQuestions,
  onNext,
  quizTitle,
}: TQuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answers, setAnswers] = useState<TAnswer[]>([]);

  const handleOptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (!isConfirmed && !!value) {
        setSelectedOption(Number(value));
      }
    },
    [setSelectedOption, isConfirmed],
  );

  const handleConfirm = useCallback(() => {
    if (selectedOption !== null) {
      const correct = question.correct_answers.includes(selectedOption);
      setIsCorrect(correct);
      setIsConfirmed(true);
      setAnswers(state => [...state, { questionId: questionNumber, answerId: selectedOption, correct }]);
    }
  }, [setIsConfirmed, setIsCorrect, question, selectedOption, setAnswers, questionNumber]);

  const handleNextClick = useCallback(() => {
    if (questionNumber === totalQuestions) {
      const currentDate = new Date().toISOString().split('.')[0];
      const storedAnswers = LocalStorageService.getItem(LocalStorageKeys.Answers);
      const existingAnswers = storedAnswers ? (JSON.parse(storedAnswers) as TAnswersObject[]) : [];
      const allAnswers = [...existingAnswers, { title: quizTitle, date: currentDate, answers: answers }];
      console.log(allAnswers);
      LocalStorageService.setItem(LocalStorageKeys.Answers, JSON.stringify(allAnswers));
    }
    onNext();
    setSelectedOption(null);
    setIsConfirmed(false);
    setIsCorrect(false);
  }, [answers, questionNumber, totalQuestions, onNext, quizTitle]);

  return { isConfirmed, isCorrect, selectedOption, handleOptionChange, handleConfirm, handleNextClick };
}
