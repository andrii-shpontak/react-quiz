import { useCallback, useMemo, useState } from 'react';

import QuestionCard from './QuestionCard';
import QuizPreview from './QuizPreview';
import type { TQuizInProcessProps } from '../../../shared/types';

const QuizInProcess = ({ quizInfo }: TQuizInProcessProps) => {
  const [quizStatus, setQuizStatus] = useState({ inProcess: 0 });

  const onNext = useCallback(() => {
    setQuizStatus(state => {
      return { inProcess: state.inProcess + 1 };
    });
  }, [setQuizStatus]);

  const currentQuestion = useMemo(
    () => quizInfo.questions.find(question => question.id === quizStatus.inProcess),
    [quizInfo, quizStatus.inProcess],
  );

  return (
    <>
      {!!quizStatus.inProcess && !!currentQuestion ? (
        <>
          <QuestionCard
            question={currentQuestion}
            onNext={onNext}
            questionNumber={quizStatus.inProcess}
            totalQuestions={quizInfo.questions.length}
            quizTitle={quizInfo.title}
            timeLimit={quizInfo.timeLimit}
          />
        </>
      ) : (
        <QuizPreview quizInfo={quizInfo} startQuiz={onNext} />
      )}
    </>
  );
};

export default QuizInProcess;
