import './App.css'

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HomePage from './components/Home/HomePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <div>About Page - bio, photo, etc</div>;
      case 'contact':
        return <div>Contact Page - email, phone, etc</div>;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-secondary text-primary">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto p-4">
        {renderContent()}
      </main>
    </div>
  );
}

export default App