import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Shops from './Shops';
import Ads from './Ads';
import Contact from './News';

function App() {
  return (
    <Router>
      <div className="bg-green-50 min-h-screen">
        {/* Navbar */}
        <nav className="bg-white shadow-md sticky top-0 z-50 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">🌾 Mana Ooru</h1>
          <div className="space-x-4">
            <Link to="/" className="text-green-800 hover:text-green-600">Home</Link>
            <Link to="/shops" className="text-green-800 hover:text-green-600">Shops</Link>
            <Link to="/ads" className="text-green-800 hover:text-green-600">Ads</Link>
            <Link to="/news" className="text-green-800 hover:text-green-600">News</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
    <div>
    <footer id="contact" className="bg-white text-center py-6 mt-10 shadow-inner">
        <p className="text-green-700 font-semibold">📞 Contact Us: mana.ooru@example.com</p>
        <p className="text-gray-500 text-sm">Made with ❤️ in Telangana</p>
      </footer>
    </div>
  );
}

export default App;
     
