import React, { useState, useRef } from 'react';
import useTiltAnimation from './hooks/useTiltAnimation';
import useMobileMenu from './hooks/useMobileMenu';
import useNavbarScroll from './hooks/useNavbarScroll';
import useAuthModal from './hooks/useAuthModal';
import { Navbar, Hero } from './components';

function App() {
  const cardsRef = useTiltAnimation();
  const { isOpen, toggleMenu, mobileMenuRef, mobileMenuBtnRef } = useMobileMenu();
  const navbarRef = useNavbarScroll();
  const { isModalOpen, activeTab, openModal, closeModal, switchToLogin, switchToRegister, modalRef } = useAuthModal();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        alert('Login successful!');
        closeModal();
      } else {
        console.error('Login failed:', data.message);
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: registerName, email: registerEmail, password: registerPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        alert('Registration successful!');
        closeModal();
        switchToLogin(); // Switch to login tab after successful registration
      } else {
        console.error('Registration failed:', data.message);
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar
        navbarRef={navbarRef}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        mobileMenuRef={mobileMenuRef}
        mobileMenuBtnRef={mobileMenuBtnRef}
        openModal={openModal}
      />

      {/* Hero Section */}
      <Hero cardsRef={cardsRef} />

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Textured background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-blue-50 opacity-70"
             style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 6V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/\>%3C/g\>%3C/g\>%3C/svg\%3E')` }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4 drop-shadow-lg">Trusted by Agencies Worldwide</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto drop-shadow-md">Join thousands of creative professionals who have transformed their workflow</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {/* Stats cards with enhanced shadows and hover effects */}
                <div className="space-y-2 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                            hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl font-bold gradient-text drop-shadow">500+</div>
                    <div className="text-gray-600">Active Agencies</div>
                </div>
                
                <div className="space-y-2 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                            hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl font-bold gradient-text drop-shadow">₹50Cr+</div>
                    <div className="text-gray-600">Revenue Processed</div>
                </div>
                
                <div className="space-y-2 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                            hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl font-bold gradient-text drop-shadow">10k+</div>
                    <div className="text-gray-600 !text-black">Projects Completed</div>
                </div>
                
                <div className="space-y-2 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                            hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl font-bold gradient-text drop-shadow">99.9%</div>
                    <div className="text-gray-600 !text-black">Uptime</div>
                </div>
            </div>
            
            {/* Company logos */}
            <div className="mt-16 pt-8 border-t border-gray-200">
    <p className="text-center text-gray-500 mb-8">Trusted by leading agencies worldwide</p>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-80">
        {/* Google */}
        <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="Google" className="h-12 grayscale hover:grayscale-0 transition-all duration-200"/>
        
        {/* Microsoft */}
        <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" alt="Microsoft" className="h-12 grayscale hover:grayscale-0 transition-all duration-200"/>
        
        {/* Adobe */}
        <img src="https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg" alt="Adobe" className="h-12 grayscale hover:grayscale-0 transition-all duration-200"/>
        
        {/* Slack */}
        <img src="https://www.vectorlogo.zone/logos/slack/slack-ar21.svg" alt="Slack" className="h-12 grayscale hover:grayscale-0 transition-all duration-200"/>
        
        {/* Shopify */}
        <img src="https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg" alt="Shopify" className="h-12 grayscale hover:grayscale-0 transition-all duration-200"/>
    </div>
</div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Everything You Need in One Place</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Streamline your entire creative workflow with powerful tools designed for modern agencies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="tilt-card group relative bg-white rounded-lg shadow-lg hover-lift p-6 text-center w-full md:w-80 cursor-pointer" ref={(el) => { cardsRef.current[0] = el; }}>
              <div className="icon-container text-purple-600 mb-4 inline-block transform translateZ(20px)">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Project Management</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Kanban boards, timelines, and automated progress tracking to keep every project on schedule</p>
              </div>
            </div>
            
            <div className="tilt-card group relative bg-white rounded-lg shadow-lg hover-lift p-6 text-center w-full md:w-80 cursor-pointer" ref={(el) => { cardsRef.current[1] = el; }}>
              <div className="icon-container text-blue-600 mb-4 inline-block transform translateZ(20px)">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Client Portal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">White-label client portals with real-time project visibility and seamless feedback collection</p>
              </div>
            </div>
            
            <div className="tilt-card group relative bg-white rounded-lg shadow-lg hover-lift p-6 text-center w-full md:w-80 cursor-pointer" ref={(el) => { cardsRef.current[2] = el; }}>
              <div className="icon-container text-green-600 mb-4 inline-block transform translateZ(20px)">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Smart Payments</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Automated invoicing, milestone payments, and integrated payment processing for faster payouts</p>
              </div>
            </div>
            
            <div className="tilt-card group relative bg-white rounded-lg shadow-lg hover-lift p-6 text-center w-full md:w-80 cursor-pointer" ref={(el) => { cardsRef.current[3] = el; }}>
              <div className="icon-container text-pink-600 mb-4 inline-block transform translateZ(20px)">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">AI Assistance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Intelligent automation for proposals, client communication, and workflow optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Powerful Features for Modern Agencies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From project kickoff to final payment, H|R Studio handles every aspect of your creative workflow with precision and style</p>
          </div>
          
          <div className="space-y-24">
            {/* Feature 1: Project Management */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.532 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <span>Project Management</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Project Management That Actually Works</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Track every project from brief to delivery with intuitive kanban boards, timeline views, and automated progress updates that keep your team and clients perfectly aligned.</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Visual Project Tracking</span>
                      <p className="text-sm text-gray-600">Intuitive kanban boards and Gantt charts for clear project visualization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Task Management</span>
                      <p className="text-sm text-gray-600">Break down projects into manageable tasks with automated assignments</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Progress Tracking</span>
                      <p className="text-sm text-gray-600">Real-time updates and milestone tracking for better project visibility</p>
                    </div>
                  </li>
                </ul>
                <div className="pt-4">
                  <button className="gradient-btn bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    Explore Project Tools
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="tilt-card bg-white rounded-2xl shadow-2xl p-6 hover-lift">
                  <div className="space-y-4">
                    {/* Project header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-lg">AC</span>
                        </div>
                        <div className="text-gray-900">
                          <h4 className="font-bold text-gray-900 text-lg">Acme Corp Rebrand</h4>
                          <p className="text-gray-500 text-sm">Brand Identity • Due in 3 days</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">In Progress</span>
                    </div>
                    
                    {/* Progress overview */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                        <span className="text-sm font-bold text-purple-600">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full relative overflow-hidden" style={{ width: '75%' }}>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Task list */}
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">Logo concepts</p>
                          <p className="text-white/60 text-xs">Completed by Sarah</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full pulse-animation"></div>
                        </div>
                        <div className="flex-1">
                         <p className="text-black font-medium">Brand guidelines</p>
                        <p className="text-black">In review • Mike Chen</p>
                        </div>
                        <span className="text-black font-medium">2 days left</span>
                      </div>
                      
                      <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                        <div className="w-5 h-5 bg-gray-300 rounded-full mr-3"></div>
                        <div className="flex-1">
                          <p className="text-black font-medium">Final deliverables</p>
                          <p className="text-black">Pending • Not assigned</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Team avatars */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">Team:</span>
                        <div className="flex -space-x-2">
                          <img src="https://i.pravatar.cc/32?img=1" className="w-8 h-8 rounded-full border-2 border-white" alt="Team member"/>
                          <img src="https://i.pravatar.cc/32?img=2" className="w-8 h-8 rounded-full border-2 border-white" alt="Team member"/>
                          <img src="https://i.pravatar.cc/32?img=3" className="w-8 h-8 rounded-full border-2 border-white" alt="Team member"/>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">Last updated: 2 hours ago</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg slide-in">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Task completed!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Client Portal */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="tilt-card bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-enhanced p-6">
                  {/* Portal header */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-2xl">AC</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Acme Corp Portal</h4>
                    <p className="text-gray-600">Your personalized project dashboard</p>
                  </div>
                  
                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">3</div>
                      <div className="text-xs text-gray-500">Active</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-orange-600">2</div>
                      <div className="text-xs text-gray-500">Review</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">12</div>
                      <div className="text-xs text-gray-500">Done</div>
                    </div>
                  </div>
                  
                  {/* Recent activity */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-3">Recent Updates</h5>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm text-gray-900">Logo concepts approved</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm text-gray-900">Brand guidelines ready for review</p>
                          <p className="text-xs text-gray-500">5 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm text-gray-900">New message from design team</p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex space-x-3 mt-4">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      View Files
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>
                
                {/* Floating feedback notification */}
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-3 rounded-lg shadow-lg slide-in" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">New feedback received</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Client Experience</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">White-Label Client Portals That Impress</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Give every client a professional, branded experience where they can track projects, leave feedback, and make payments - all seamlessly integrated under your agency's identity.</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">White-label Branding</span>
                      <p className="text-sm text-gray-600">Your logo, colors, and custom domain for a seamless brand experience</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Progress Transparency</span>
                      <p className="text-sm text-gray-600">Clients see exactly what's happening without overwhelming them with details</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Feedback Collection</span>
                      <p className="text-sm text-gray-600">Contextual feedback tools with timestamps and visual annotations</p>
                    </div>
                  </li>
                </ul>
                <div className="pt-4">
                  <button className="gradient-btn bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    See Client Portal Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Feature 3: Smart Payments */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  <span>Payment Processing</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Get Paid Faster, Every Single Time</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Eliminate payment delays with automated invoicing, milestone-based payments, and integrated processing that makes it effortless for clients to pay you on time.</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Smart Invoicing</span>
                      <p className="text-sm text-gray-600">Smart invoicing based on project milestones and deliverable approvals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Multiple Payment Methods</span>
                      <p className="text-sm text-gray-600">UPI, cards, bank transfers, and international payments - all in one place</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Payment Tracking & Reminders</span>
                      <p className="text-sm text-gray-600">Automatic follow-ups and payment status updates for better cash flow</p>
                    </div>
                  </li>
                </ul>
                <div className="pt-4">
                  <button className="gradient-btn bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    Learn About Payments
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="tilt-card bg-white rounded-2xl shadow-enhanced p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">Payment Dashboard</h4>
                      <span className="text-sm text-gray-500">Current Month</span>
                    </div>
                    <div className="text-4xl font-bold text-green-600 mb-2">₹4,25,000</div>
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-600 font-medium">+24% from last month</span>
                    </div>
                  </div>
                  
                  {/* Payment status cards */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">TechCorp - Video Campaign</p>
                          <p className="text-sm text-gray-600">Paid 2 days ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">₹1,50,000</div>
                        <div className="text-xs text-green-600 font-medium">PAID</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Acme Corp - Brand Identity</p>
                          <p className="text-sm text-gray-600">Due in 1 day</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-orange-600">₹85,000</div>
                        <div className="text-xs text-orange-600 font-medium">PENDING</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">StartupX - Digital Strategy</p>
                          <p className="text-sm text-gray-600">Invoice sent</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">₹1,90,000</div>
                        <div className="text-xs text-blue-600 font-medium">INVOICED</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="flex space-x-3 mt-6 pt-4 border-t border-gray-100">
                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                      Send Invoice
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      View Reports
                    </button>
                  </div>
                </div>
                
                {/* Floating payment notification */}
                <div className="absolute -top-4 -left-4 bg-green-500 text-white p-3 rounded-lg shadow-lg slide-in" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    <span className="text-sm font-medium">Payment received!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: AI Assistance */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="tilt-card bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 rounded-2xl shadow-enhanced p-6">
                  {/* AI Chat Interface */}
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-900">AI Assistant</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full pulse-animation"></div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex">
                        <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
                          <p className="text-gray-700">Create a proposal for a new client's website project</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-3 py-2 max-w-xs">
                          <p>I've created a comprehensive website proposal including timeline, deliverables, and pricing based on your previous projects. Would you like me to customize it further?</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
                          <p className="text-gray-700">Yes, add SEO services and make it more formal</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Typing indicator */}
                    <div className="flex justify-end mt-3">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Suggestions */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 text-sm">Quick Actions</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-white p-3 rounded-lg shadow-sm text-left hover:shadow-md transition-shadow">
                        <div className="text-xs font-medium text-purple-600 mb-1">Generate</div>
                        <div className="text-xs text-gray-700">Client Email</div>
                      </button>
                      <button className="bg-white p-3 rounded-lg shadow-sm text-left hover:shadow-md transition-shadow">
                        <div className="text-xs font-medium text-purple-600 mb-1">Create</div>
                        <div className="text-xs text-gray-700">Project Brief</div>
                      </button>
                      <button className="bg-white p-3 rounded-lg shadow-sm text-left hover:shadow-md transition-shadow">
                        <div className="text-xs font-medium text-purple-600 mb-1">Draft</div>
                        <div className="text-xs text-gray-700">Invoice</div>
                      </button>
                      <button className="bg-white p-3 rounded-lg shadow-sm text-left hover:shadow-md transition-shadow">
                        <div className="text-xs font-medium text-purple-600 mb-1">Write</div>
                        <div className="text-xs text-gray-700">Proposal</div>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating AI notification */}
                <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white p-3 rounded-lg shadow-lg slide-in" style={{ animationDelay: '1.2s' }}>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.532 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Proposal ready!</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.532 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <span>AI-Powered</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Your Intelligent Agency Assistant</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Let AI handle the repetitive tasks while you focus on creativity. From content generation to project planning, our AI assistant makes your agency more efficient.</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Smart Content Creation</span>
                      <p className="text-sm text-gray-600">Generate proposals, emails, and marketing copy with AI that learns your brand voice</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Automated Workflows</span>
                      <p className="text-sm text-gray-600">Set up intelligent automations for project management, client updates, and team coordination</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">Predictive Analytics</span>
                      <p className="text-sm text-gray-600">Get AI-powered insights on project timelines, resource allocation, and business forecasting</p>
                    </div>
                  </li>
                </ul>
                <button className="gradient-btn bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Try AI Assistant Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the plan that fits your agency's needs. No hidden fees, no surprises.</p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Trial Card */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg text-white text-center">
              <div className="mb-4">
                <span className="text-4xl font-extrabold">14<span className="text-2xl font-medium">/mo</span></span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Free Trial</h3>
              <p className="text-sm mb-4">Experience all features with no limitations. Cancel anytime.</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-100">
                Start Free Trial
              </button>
            </div>
            
            {/* Basic Plan Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900">15<span className="text-2xl font-medium">/mo</span></span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Basic Plan</h3>
              <p className="text-sm mb-4 text-gray-600">Ideal for freelancers and small teams. All essential features included.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-purple-700">
                Get Started
              </button>
            </div>
            
            {/* Pro Plan Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900">29<span className="text-2xl font-medium">/mo</span></span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Pro Plan</h3>
              <p className="text-sm mb-4 text-gray-600">Advanced features for growing agencies. Priority support included.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-purple-700">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. See how we've transformed other agencies.</p>
          </div>
          
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-quote-left text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">John Doe</h4>
                  <p className="text-sm text-gray-500">Creative Director, ABC Agency</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"H|R Studio has completely transformed the way we manage projects and communicate with clients. The AI tools are a game changer!"</p>
              <div className="flex space-x-2">
                <span className="text-xs bg-green-100 text-green-800 rounded-full px-3 py-1">Project Management</span>
                <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-3 py-1">Client Portal</span>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-quote-left text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Jane Smith</h4>
                  <p className="text-sm text-gray-500">CEO, XYZ Agency</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"The level of organization and efficiency we've achieved since using H|R Studio is incredible. Our clients love the new portal!"</p>
              <div className="flex space-x-2">
                <span className="text-xs bg-green-100 text-green-800 rounded-full px-3 py-1">Automated Billing</span>
                <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-3 py-1">AI Assistance</span>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-quote-left text-white"></i>
                </div>
      <div>
                  <h4 className="text-lg font-bold text-gray-900">Emily Johnson</h4>
                  <p className="text-sm text-gray-500">Founder, Creative Co.</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"As a small agency, we struggled with managing multiple clients and projects. H|R Studio has streamlined our entire process."</p>
              <div className="flex space-x-2">
                <span className="text-xs bg-green-100 text-green-800 rounded-full px-3 py-1">Client Portal</span>
                <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-3 py-1">Smart Payments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Resources to Fuel Your Growth</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Access exclusive content, tools, and templates to help your agency thrive.</p>
          </div>
          
          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg text-white text-center">
              <div className="mb-4">
                <i className="fas fa-book-open fa-3x opacity-80"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">E-book: The Future of Agency Work</h3>
              <p className="text-sm mb-4 text-white/90">Discover the trends and tools that will shape the future of creative agencies.</p>
              <a href="#" className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-100">
                Download Now
              </a>
            </div>
            
            {/* Resource 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="mb-4">
                <i className="fas fa-video fa-3x text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Webinar: Mastering Client Communication</h3>
              <p className="text-sm mb-4 text-gray-600">Join our experts as they share strategies for effective client communication and relationship building.</p>
              <a href="#" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-purple-700">
                Register Now
              </a>
            </div>
            
            {/* Resource 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="mb-4">
                <i className="fas fa-tools fa-3x text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Template Pack: Proposals & Invoices</h3>
              <p className="text-sm mb-4 text-gray-600">Get our customizable templates for proposals, invoices, and contracts to streamline your workflow.</p>
              <a href="#" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-purple-700">
                Get Templates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Agency?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and agencies who have streamlined their workflow with H|R Studio. 
            Start your free trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover-lift shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200">
              Schedule Demo
        </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-white/70 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">H|R Studio</span>
              </div>
              <p className="text-gray-300">
                The all-in-one platform for creative agencies and freelancers to manage projects, 
                clients, and payments seamlessly.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
            
            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Integrations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Security</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Press</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Partners</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Status</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300">
                © 2025 H|R Studio. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Login/Register Modal Placeholder */}
      <div id="auth-modal" ref={modalRef} className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isModalOpen ? '' : 'hidden'}`}>
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative transform transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <button id="close-modal" className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg" onClick={closeModal}>
            &times;
          </button>
          <div className="flex border-b border-gray-200">
            <button
              id="login-tab"
              className={`py-3 px-6 text-center text-sm font-medium focus:outline-none ${activeTab === 'login' ? 'bg-white text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
              onClick={switchToLogin}
            >
              Login
            </button>
            <button
              id="register-tab"
              className={`py-3 px-6 text-center text-sm font-medium focus:outline-none ${activeTab === 'register' ? 'bg-white text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
              onClick={switchToRegister}
            >
              Register
            </button>
          </div>
          <div className="p-4">
            <form id="login-form" className={`${activeTab === 'login' ? '' : 'hidden'}`} onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label htmlFor="login-email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="login-email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="email@example.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              </div>
              <div className="mb-6">
                <label htmlFor="login-password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="login-password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Login</button>
                <a href="#" className="inline-block align-baseline font-bold text-sm text-purple-600 hover:text-purple-800">Forgot Password?</a>
              </div>
            </form>
            <form id="register-form" className={`${activeTab === 'register' ? '' : 'hidden'}`} onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label htmlFor="register-name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="register-name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="register-email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="register-email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="email@example.com" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
              </div>
              <div className="mb-6">
                <label htmlFor="register-password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="register-password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
