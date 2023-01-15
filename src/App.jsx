import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./assets/css/index.css";
import SourcesPage from "./pages/SourcesPage.jsx";
import ReferencePage from "./pages/ReferencePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage";
import TitanPage from "./pages/TitanPage";
//front or home page should be for promotion

const App = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<Navigate to="/" />} />
            <Route exact path="/sources" element={<SourcesPage />} />
            <Route exact path="/ref" element={<ReferencePage />} />
            <Route exact path="/details" element={<DetailsPage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/titan" element={<TitanPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
);

export default App;
