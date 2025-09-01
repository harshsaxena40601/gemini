import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-mockup h-[500px] relative">
      {/* Dashboard Header with Updated Metrics */}
      <div className="flex justify-between items-center p-6 border-b border-white/10">
        <div className="flex space-x-6">
          {/* Active Members Metric */}
          <div className="metric-card rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-user-group"></i>
              </div>
              <div>
                <p className="text-xs opacity-70">Active Members</p>
                <p className="text-lg font-bold">24</p>
              </div>
            </div>
          </div>

          {/* Pending Projects Metric */}
          <div className="metric-card rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <p className="text-xs opacity-70">Pending Projects</p>
                <p className="text-lg font-bold">7</p>
                <span className="text-xs text-orange-300">Requires attention</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <div className="bg-white/10 rounded-lg px-3 py-1 text-xs text-white">
            <i className="fas fa-bell mr-1"></i> 3 new
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-white/60 text-xs mb-1">In Progress</div>
            <div className="text-white text-xl font-bold">12</div>
            <div className="text-blue-400 text-xs">On track</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-white/60 text-xs mb-1">Pending Review</div>
            <div className="text-white text-xl font-bold">5</div>
            <div className="text-orange-400 text-xs">2 urgent</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-white/60 text-xs mb-1">Completed</div>
            <div className="text-white text-xl font-bold">18</div>
            <div className="text-green-400 text-xs">This month</div>
          </div>
        </div>

        {/* Pending Projects List */}
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-semibold">Pending Projects</h4>
            <span className="text-white/60 text-xs">View all →</span>
          </div>
          <div className="space-y-3">
            <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">SP</div>
                <div>
                  <p className="text-white text-sm font-medium">Social Media Campaign</p>
                  <p className="text-white/60 text-xs">Waiting for content approval</p>
                </div>
              </div>
              <span className="text-orange-300 text-xs">Due tomorrow</span>
            </div>

            <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">WD</div>
                <div>
                  <p className="text-white text-sm font-medium">Website Redesign</p>
                  <p className="text-white/60 text-xs">Client feedback pending</p>
                </div>
              </div>
              <span className="text-orange-300 text-xs">Due in 3 days</span>
            </div>

            <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">LP</div>
                <div>
                  <p className="text-white text-sm font-medium">Logo Package</p>
                  <p className="text-white/60 text-xs">Awaiting resource allocation</p>
                </div>
              </div>
              <span className="text-orange-300 text-xs">Due next week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
