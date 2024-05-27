import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Loader } from './shared/components';

const Home = lazy(() => import('./pages/Home'));
const Quiz = lazy(() => import('./pages/Quiz'));
const Quizzes = lazy(() => import('./pages/Quizzes'));
const CreateQuiz = lazy(() => import('./pages/CreateQuiz'));

const LazyRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/react-quiz' element={<Home />} />
          <Route path='/react-quiz/quiz/:id' element={<Quiz />} />
          <Route path='/react-quiz/quizzes' element={<Quizzes />} />
          <Route path='/react-quiz/create-quiz' element={<CreateQuiz />} />
          <Route path='/react-quiz/edit/:id' element={<CreateQuiz />} />
          <Route path='/react-quiz/*' element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default LazyRouter;
