import React from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import SourcesPage from './pages/SourcesPage';
import ReferencePage from './pages/ReferencePage';
import ErrorPage from './pages/ErrorPage';
const App = () => (
  <Router>
    <Route exact path='/sources' element={<SourcesPage />} />
    <Route exact path='/ref' element={<ReferencePage />} />
    <Route exact path='/home' element={<Navigate to='/' />} />
    <Route path='*' element={<ErrorPage />} />
  </Router>
);

export default App;
