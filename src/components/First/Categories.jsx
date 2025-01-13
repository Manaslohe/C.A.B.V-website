import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Categories = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [contentRef, contentVisible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div 
          ref={headerRef} 
          className={`text-center mb-16 fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1544C0] mb-8">
            Blind Cricket Categories
          </h1>
          <div className="w-32 h-2 bg-[#1544C0] mx-auto mb-8" />
          <p className="text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
            Blind cricket is divided into three categories based on visual ability
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-3 gap-8 stagger-children ${contentVisible ? 'visible' : ''}`}
        >
          {/* B1 Players Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border-t-4 border-[#1544C0]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#1544C0] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                B1
              </div>
              <h3 className="text-3xl font-bold text-[#1544C0]">
                Completely Blind
              </h3>
            </div>
            <div className="space-y-4 text-lg">
              <p className="font-medium text-gray-800">
                Players with no vision receive special advantages:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#1544C0] mr-2">•</span>
                  <span><strong>One Bounce Catch:</strong> Allowed to take catches after one bounce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1544C0] mr-2">•</span>
                  <span><strong>Double Runs:</strong> Single runs count as two runs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1544C0] mr-2">•</span>
                  <span><strong>Mandatory Equipment:</strong> Must wear blindfold goggles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1544C0] mr-2">•</span>
                  <span><strong>Bowling Quota:</strong> Bowl 40% of team's overs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* B2 Players Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border-t-4 border-[#1544C0]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#1544C0] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                B2
              </div>
              <h3 className="text-3xl font-bold text-[#1544C0]">
                Partially Blind
              </h3>
            </div>
            <div className="space-y-4 text-lg">
              <p className="font-medium text-gray-800">
                Players with limited vision:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#1544C0] mr-2">•</span>
                  <span><strong>Vision Range:</strong> Can see at a distance of two to four feet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1544C0] mr-2">•</span>
                  <span><strong>Role:</strong> Form a crucial part of team's batting and bowling lineup</span>
                </li>
              </ul>
            </div>
          </div>

          {/* B3 Players Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border-t-4 border-[#1544C0]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#1544C0] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                B3
              </div>
              <h3 className="text-3xl font-bold text-[#1544C0]">
                Partially Sighted
              </h3>
            </div>
            <div className="space-y-4 text-lg">
              <p className="font-medium text-gray-800">
                Players with better vision:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#1544C0] mr-2">•</span>
                  <span><strong>Vision Range:</strong> Can see at a distance of six to eight feet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1544C0] mr-2">•</span>
                  <span><strong>Role:</strong> Key players in fielding and strategic positions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
