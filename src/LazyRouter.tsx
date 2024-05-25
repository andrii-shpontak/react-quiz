import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

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
          <Route path='/' element={<Home />} />
          <Route path='/quiz/:id' element={<Quiz />} />
          <Route path='/quizzes' element={<Quizzes />} />
          <Route path='/create-quiz' element={<CreateQuiz />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default LazyRouter;
