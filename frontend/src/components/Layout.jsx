import React from 'react';

const Layout = () => {
  return (
    <>
      <style jsx global>{`
        :root {
          --text-primary: rgb(0, 0, 0);
          --text-secondary: rgb(55, 55, 55);
        }

        body {
          color: var(--text-primary);
        }

        p, h1, h2, h3, h4, h5, h6, span, div, ul, li, a, button {
          color: var(--text-primary) !important;
        }

        [class*="text-gray-"],
        .text-white,
        .text-black {
          color: var(--text-primary) !important;
        }

        .gradient-bg *,
        .bg-purple-600 *,
        .bg-purple-700 *,
        .bg-purple-800 *,
        .bg-gray-900 *,
        .gradient-btn,
        .bg-blue-600 *,
        .bg-green-600 *,
        .bg-pink-600 *,
        .bg-pink-700 *,
        .bg-pink-500 *,
        .bg-blue-700 *,
        .bg-green-700 * {
          color: white !important;
        }
      `}</style>

      <div className='dark-theme'>
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation content */}
          </div>
        </nav>

        <main>
          <section className="gradient-bg min-h-screen flex items-center relative pt-24">
            {/* Hero section content */}
          </section>

          <section className="py-16 bg-white relative overflow-hidden">
            {/* Stats section content */}
          </section>

          {/* Other sections */}
        </main>

        <footer className="bg-gray-900 text-white py-16">
          {/* Footer content */}
        </footer>
      </div>
    </>
  );
};

export default Layout;