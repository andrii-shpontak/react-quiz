import type { TQuizPreviewProps } from '../../../shared/types';

const QuizPreview = ({ quizInfo, startQuiz }: TQuizPreviewProps) => {
  const { title, category, difficulty, timeLimit } = quizInfo;

  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200 w-96'>
        <h2 className='text-2xl font-bold mb-4'>{title}</h2>
        <p className='text-gray-700 mb-2'>Category: {category}</p>
        <p className='text-gray-700 mb-2'>Difficulty: {difficulty}</p>
        <p className='text-gray-700 mb-4'>Time limit: {timeLimit} minutes</p>
        <button onClick={startQuiz} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizPreview;
