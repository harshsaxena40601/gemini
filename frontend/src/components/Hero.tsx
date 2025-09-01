import React from 'react';
import Dashboard from './Dashboard';

interface HeroProps {
  cardsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const Hero: React.FC<HeroProps> = ({ cardsRef }) => {
  return (
    <section className="gradient-bg min-h-screen flex items-center relative pt-24">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20 -top-48 -left-48 float-animation" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 float-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full pulse-animation"></span>
              <span className="text-white">500+ agencies already onboard</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              The Complete <span className="gradient-text-alt">Agency Operating System</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              From client onboarding to final payment - manage your entire creative workflow in one powerful platform. Built by agency owners, for agency owners.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-200">Project Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-200">Client Portals</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-200">Automated Billing</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-200">AI Assistance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-200 hover-lift relative overflow-hidden">
                <span className="relative z-10">Start 14-Day Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch 2-min Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/40?img=1" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  <img src="https://i.pravatar.cc/40?img=2" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  <img src="https://i.pravatar.cc/40?img=3" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  <img src="https://i.pravatar.cc/40?img=4" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-white/90 text-sm">4.9/5 from 500+ agencies</span>
                </div>
              </div>
              <p className="text-white/70 text-sm italic">"H|R Studio saved us 20+ hours per week" - Sarah, Creative Director</p>
            </div>
          </div>

          {/* Right Content - Enhanced Dashboard Mockup */}
          <div className="relative">
            {/* Floating metrics - repositioned */}
            <div className="absolute -top-6 right-6 z-10 transform hover:-translate-y-1 transition-transform duration-200">
              <div className="metric-card rounded-xl p-4 bg-gradient-to-br from-green-500/10 to-green-500/20 backdrop-blur-md border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-line text-white"></i>
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Revenue</p>
                    <p className="text-lg font-bold text-white">+45%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 z-10 transform hover:-translate-y-1 transition-transform duration-200">
              <div className="metric-card rounded-xl p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/20 backdrop-blur-md border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Active Clients</p>
                    <p className="text-lg font-bold text-white">127</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Dashboard */}
            <Dashboard />
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute top-20 right-4 bg-white rounded-lg p-3 shadow-lg slide-in" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full pulse-animation"></div>
          <span className="text-sm text-gray-700">Client approved design!</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-animation">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
