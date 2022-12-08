import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './assets/css/index.css';
import SourcesPage from './pages/SourcesPage.jsx';
import ReferencePage from './pages/ReferencePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
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
