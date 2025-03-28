import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopUsersPage from './Pages/TopUsersPage';
import TrendingPostsPage from './Pages/TrendingPostsPage';
import FeedPage from './Pages/FeedPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/topusers" element={<TopUsersPage />} />
        <Route path="/trendingposts" element={<TrendingPostsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
