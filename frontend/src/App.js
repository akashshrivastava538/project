import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import CveDetailsPage from './pages/CveDetailsPage';

function App() {
    return (
        <Router>
            {/* Header with "Securin" bold and attractive */}
            <header style={headerStyle}>
                <span style={companyNameStyle}>Securin</span>
                <span style={rightHeaderStyle}>AKASH SHRIVASTAVA | Full-stack Developer</span>
            </header>

            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/cves/:id" element={<CveDetailsPage />} />
            </Routes>
        </Router>
    );
}

// Styles for the header
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#282c34',
    color: '#fff',
    fontSize: '18px',
};

const companyNameStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#f39c12', // Attractive golden color
    fontFamily: 'Arial, sans-serif', // Clean and modern font
};

const rightHeaderStyle = {
    textAlign: 'right',
};

export default App;
