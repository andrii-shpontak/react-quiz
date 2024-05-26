import type { TAnswer, TAnswersObject, TQuestionCardHandlersProps } from '../../../shared/types';
import { useCallback, useEffect, useState } from 'react';

import { LocalStorageKeys } from '../../../shared/constants/LocalStorageKeys';
import { LocalStorageService } from '../../../services/localStorageService';
import { getElapsedTime } from '../../../shared/helpers/timeHelpers';

export function useQuestionHandlers({
  question,
  questionNumber,
  totalQuestions,
  onNext,
  quizTitle,
}: TQuestionCardHandlersProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [answers, setAnswers] = useState<TAnswer[]>([]);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [endResult, setResult] = useState<TAnswersObject | null>(null);

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
      if (questionNumber === totalQuestions) {
        setEndTime(new Date());
      }
    }
  }, [setIsConfirmed, setIsCorrect, question, selectedOption, setAnswers, questionNumber, setEndTime, totalQuestions]);

  const handleNextClick = useCallback(() => {
    if (questionNumber === totalQuestions && !!startTime && !!endTime) {
      const currentDate = new Date().toISOString().split('.')[0];
      const elapsedTime = getElapsedTime(startTime, endTime);
      const storedAnswers = LocalStorageService.getItem(LocalStorageKeys.Answers);
      const existingAnswers = storedAnswers ? (JSON.parse(storedAnswers) as TAnswersObject[]) : [];
      const currentQuizObj = { title: quizTitle, date: currentDate, elapsedTime, answers };
      setResult(currentQuizObj);
      const allAnswers = [...existingAnswers, currentQuizObj];
      LocalStorageService.setItem(LocalStorageKeys.Answers, JSON.stringify(allAnswers));
      return;
    }
    onNext();
    setSelectedOption(null);
    setIsConfirmed(false);
    setIsCorrect(false);
  }, [answers, questionNumber, totalQuestions, onNext, quizTitle, endTime, startTime]);

  useEffect(() => {
    if (!startTime) {
      setStartTime(new Date());
    }
  }, [startTime]);

  return {
    isConfirmed,
    isCorrect,
    selectedOption,
    handleOptionChange,
    handleConfirm,
    handleNextClick,
    isFinished: !!endTime,
    endResult,
  };
}
