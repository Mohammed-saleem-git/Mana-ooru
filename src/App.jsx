import React from 'react';

function App() {
  return (
    <div className="bg-green-100 min-h-screen p-4 text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">🌾 Mana Ooru</h1>
      <p className="text-gray-600 mb-10">Empowering Villages Through Digital Services</p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-800">🛒 Village Shops</h2>
          <p className="text-gray-600">Browse or list your village shops easily.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-800">📰 News & Events</h2>
          <p className="text-gray-600">Stay updated with local news and programs.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-800">👨‍🔧 Services</h2>
          <p className="text-gray-600">Contact electricians, carpenters, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
