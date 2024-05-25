import { useCallback, useMemo, useState } from 'react';

import QuestionCard from './QuestionCard';
import QuizPreview from './QuizPreview';
import type { TQuizInProcessProps } from '../../../shared/types';
import TimeRemaining from './TimeRemaining';

const QuizInProcess = ({ quizInfo }: TQuizInProcessProps) => {
  const [quizStatus, setQuizStatus] = useState({ inProcess: 0 });
  const currentQuestion = useMemo(
    () => quizInfo.questions.find(question => question.id === quizStatus.inProcess),
    [quizInfo, quizStatus.inProcess],
  );

  const onNext = useCallback(() => {
    setQuizStatus(state => {
      return { inProcess: state.inProcess + 1 };
    });
  }, []);

  return (
    <>
      {!!quizStatus.inProcess && !!currentQuestion ? (
        <>
          <TimeRemaining timeLimit={quizInfo.timeLimit} onStart={() => {}} onStop={() => {}} />
          <QuestionCard
            question={currentQuestion}
            onNext={onNext}
            questionNumber={quizStatus.inProcess}
            totalQuestions={quizInfo.questions.length}
            quizTitle={quizInfo.title}
          />
        </>
      ) : (
        <QuizPreview quizInfo={quizInfo} startQuiz={onNext} />
      )}
    </>
  );
};

export default QuizInProcess;
