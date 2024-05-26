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
  timeLimit: number;
  category: 'Frontend' | 'Backend' | 'Devops';
  difficulty: 'simple' | 'medium' | 'difficult';
  questions: TQuestion[];
};

export type TUseQuizzesDataProps = { id?: number };

export type TQuizUseDataProps = { id?: string; data: TQuiz[] };

export type TQuestionCardHandlersProps = {
  question: TQuestion;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
  quizTitle: string;
};

export type TQuestionCardProps = TQuestionCardHandlersProps & {
  timeLimit: number;
};

export type TQuizInProcessProps = { quizInfo: TQuiz };

export type TQuizPreviewProps = { quizInfo: TQuiz; startQuiz: () => void };

export type TTimeRemainingProps = {
  timeLimit: number;
  isFinished: boolean;
};

export type THeaderProps = { title: string };

export type TSidebarProps = { onClose: () => void };

export type TAnswer = { questionId: number; answerId: number; correct: boolean };

export type TAnswersObject = {
  title: string;
  date: string;
  elapsedTime: string;
  answers: TAnswer[];
};

export type TGetQuizResultInfo = {
  percentageColor: string;
  percentage: number;
  correctOfAll: string;
  elapsedTime: string;
};
