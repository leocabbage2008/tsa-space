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
import MarsPage from "./pages/MarsPage";
import PurchasePage from "./pages/PurchasePage";
import NeptunePage from "./pages/NeptunePage";
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
            <Route exact path="/mars" element={<MarsPage />} />
            <Route exact path="/neptune" element={<NeptunePage />} />
            <Route exact path="/purchase" element={<PurchasePage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
);

export default App;
