import { CreateQuiz, Home, Quizzes } from './pages';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React from 'react';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quizzes' element={<Quizzes />} />
        <Route path='/create-quiz' element={<CreateQuiz />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default App;
