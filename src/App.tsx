import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import { Loader } from './shared/components';

const Home = lazy(() => import('./pages/Home'));
const Quizzes = lazy(() => import('./pages/Quizzes'));
const CreateQuiz = lazy(() => import('./pages/CreateQuiz'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizzes' element={<Quizzes />} />
          <Route path='/create-quiz' element={<CreateQuiz />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
