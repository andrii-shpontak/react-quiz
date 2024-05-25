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

export type QuestionCardProps = {
  question: TQuestion;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
};

export type TQuizInProcessProps = { quizInfo: TQuiz };

export type TQuizPreviewProps = { quizInfo: TQuiz; startQuiz: () => void };

export type TTimeRemainingProps = {
  timeLimit: number;
  onStart: () => void;
  onStop: () => void;
};

export type THeaderProps = { title: string };

export type TSidebarProps = { onClose: () => void };
