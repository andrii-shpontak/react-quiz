import type { TAnswersObject, TGetQuizResultInfo } from '../types';

export function getQuizResultData(savedQuizObject: TAnswersObject): TGetQuizResultInfo {
  const { elapsedTime, answers } = savedQuizObject;
  let correctAnswers = 0;

  for (let i = 0; i < answers.length; i++) {
    answers[i].correct && correctAnswers++;
  }

  const percentage = Math.round((correctAnswers / answers.length) * 100);

  const correctOfAll = `${correctAnswers} / ${answers.length}`;

  let percentageColor = '';

  switch (true) {
    case percentage >= 70:
      percentageColor = 'text-green-500';
      break;
    case percentage > 50:
      percentageColor = 'text-orange-500';
      break;
    default:
      percentageColor = 'text-red-500';
      break;
  }

  return { percentageColor, percentage, correctOfAll, elapsedTime };
}
