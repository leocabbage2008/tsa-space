import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './index.css';
import SourcesPage from './pages/SourcesPage';
import ReferencePage from './pages/ReferencePage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
const App = () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/home' element={<Navigate to='/' />} />
      <Route exact path='/sources' element={<SourcesPage />} />
      <Route exact path='/ref' element={<ReferencePage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;
