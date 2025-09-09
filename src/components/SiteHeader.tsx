import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Link, useLocation } from 'react-router-dom';

const SiteHeader: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="backdrop-blur-sm border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/Transparent African Ai DTG logo.png" alt="African Ai DTG" className="h-12 md:h-16" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button onClick={toggleSidebar} className="md:hidden p-2 text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50" onClick={toggleSidebar} />
          <div className="fixed right-0 top-0 h-full w-64 bg-white/95 border-l border-gray-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <img src="/Transparent African Ai DTG logo.png" alt="African Ai DTG" className="h-12" />
                </div>
                <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleSidebar}
                    className={`block text-sm font-medium transition-colors ${
                      location.pathname === item.path ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
