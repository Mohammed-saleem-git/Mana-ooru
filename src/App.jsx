import React from 'react';

function App() {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-green-700">🌾 Mana Ooru</h1>
            <div className="space-x-4">
              <a href="#" className="text-green-800 font-medium hover:text-green-600">Home</a>
              <a href="#shops" className="text-green-800 font-medium hover:text-green-600">Shops</a>
              <a href="#news" className="text-green-800 font-medium hover:text-green-600">News</a>
              <a href="#contact" className="text-green-800 font-medium hover:text-green-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-12 bg-green-200">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to Mana Ooru</h2>
        <p className="text-gray-700 mt-2">Your village. Your services. Online. 🌐</p>
      </header>

      {/* Features Section */}
      <section id="shops" className="grid md:grid-cols-3 gap-6 p-6">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700">🛒 Village Shops</h3>
          <p className="text-gray-600">Find and list all stores from your area.</p>
        </div>
        <div id="news" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700">📰 News & Events</h3>
          <p className="text-gray-600">Post village announcements and updates.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700">🛠️ Local Services</h3>
          <p className="text-gray-600">Electricians, plumbers, and daily services.</p>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-white text-center py-6 mt-10 shadow-inner">
        <p className="text-green-700 font-semibold">📞 Contact Us: mana.ooru@example.com</p>
        <p className="text-gray-500 text-sm">Made with ❤️ in Telangana</p>
      </footer>
    </div>
  );
}

export default App;
