export type TQuizAnswer = {
  id: number;
  text: string;
};

export type TQuestion = {
  id: number;
  text: string;
  options: TQuizAnswer[];
  correct_answers: number[];
};

export type TQuiz = {
  title: string;
  questions: TQuestion[];
};

export type TUseQuizzesDataProps = { id?: number };

export type TQuizUseDataProps = { id?: string; data: TQuiz[] };
