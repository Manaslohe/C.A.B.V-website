import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const GameFormat = () => {
  const [formatRef, formatVisible] = useIntersectionObserver();
  const [missionRef, missionVisible] = useIntersectionObserver();
  const [goalRef, goalVisible] = useIntersectionObserver();

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div 
          ref={formatRef}
          className={`container mx-auto px-4 scale-up ${formatVisible ? 'visible' : ''}`}
        >
          {/* Enhanced Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1544C0] mb-6 tracking-tight">
              Game Format & Rules
            </h2>
            <div className="w-32 h-2 bg-[#1544C0] mx-auto mb-8" />
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Understanding the structured formats and essential rules that make blind cricket unique
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-6xl mx-auto">
            {/* Game Format Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Team Composition Card */}
              <div className="bg-white rounded-xl shadow-xl p-10 border-t-4 border-[#1544C0] hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-[#1544C0] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-[#1544C0]">
                    Team Composition
                  </h3>
                </div>
                <div className="text-gray-700 space-y-6">
                  <p className="text-xl font-medium text-gray-900 mb-4">
                    To form a complete playing 11, teams must include:
                  </p>
                  <ul className="space-y-4">
                    {[
                      { type: 'B1', count: 4, desc: 'completely blind players' },
                      { type: 'B2', count: 3, desc: 'partially blind players' },
                      { type: 'B3', count: 4, desc: 'partially sighted players' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3 text-lg">
                        <span className="w-8 h-8 bg-[#1544C0] bg-opacity-10 rounded-full flex items-center justify-center text-[#1544C0] font-bold">
                          {item.count}
                        </span>
                        <span className="font-medium">
                          <span className="text-[#1544C0]">{item.type}</span> - {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Match Formats Card */}
              <div className="bg-white rounded-xl shadow-xl p-10 border-t-4 border-[#1544C0] hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-[#1544C0] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-[#1544C0]">
                    Match Formats
                  </h3>
                </div>
                <div className="text-gray-700 space-y-6">
                  <p className="text-xl font-medium text-gray-900 mb-4">
                    International blind cricket is played in two formats:
                  </p>
                  <div className="space-y-6">
                    <div className="p-6 bg-[#1544C0] bg-opacity-5 rounded-lg">
                      <h4 className="text-xl font-bold text-[#1544C0] mb-2">T20 Format</h4>
                      <p className="text-lg text-gray-700">
                        Twenty overs per side, fast-paced and exciting format
                      </p>
                    </div>
                    <div className="p-6 bg-[#1544C0] bg-opacity-5 rounded-lg">
                      <h4 className="text-xl font-bold text-[#1544C0] mb-2">One Day Format</h4>
                      <p className="text-lg text-gray-700">
                        40 overs format <span className="text-gray-500">(different from standard 50 overs)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Body Section */}
            <div className="bg-[#1544C0] bg-opacity-[0.02] rounded-xl p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/images/news paper.jpg"
                      alt="Cricket Format"
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-[#1544C0] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                        <i className="fas fa-globe"></i>
                      </div>
                      <h3 className="text-3xl font-bold text-[#1544C0]">
                        Global Governance
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xl text-gray-800 leading-relaxed">
                        The <span className="font-semibold text-[#1544C0]">World Blind Cricket Council (WBCC)</span> 
                        serves as the global governing body for blind cricket, ensuring:
                      </p>
                      <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700">
                        {[
                          'Standardized Rules & Regulations',
                          'International Tournament Organization',
                          'Player Development Programs',
                          'Global Sport Promotion'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <span className="text-[#1544C0]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section with smaller background */}
      <section 
        ref={missionRef}
        className={`py-20 relative fade-up ${missionVisible ? 'visible' : ''}`}
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/foundation.png')",
            backgroundSize: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.7
          }}
        />
        
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#1544C0] to-blue-700 opacity-85" />

        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="relative">
            <h2 className="text-5xl font-bold mb-8 text-white">Foundation</h2>
            <div className="w-32 h-2 bg-white mx-auto mb-8" />
            <p className="text-2xl font-medium max-w-3xl mx-auto text-white leading-relaxed">
              Founded in 2022, we are dedicated to promoting and developing blind cricket 
              across the Vidarbha region, creating opportunities and fostering talent.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section with improved readability */}
      <section 
        ref={goalRef}
        className={`py-20 bg-gray-50 fade-up ${goalVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <h2 className="text-5xl font-bold text-[#1544C0] mb-8">Our Vision</h2>
          <div className="w-32 h-2 bg-[#1544C0] mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-xl p-10 border-t-4 border-[#1544C0] hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-[#1544C0] mb-6">Mission</h3>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p className="font-medium">
                  To offer opportunities to exceptionally talented visually impaired cricketers 
                  from Vidarbha, enabling them to showcase their skills and potential on the national stage.
                </p>
                <p className="italic text-gray-600">
                  "Empowering through cricket, transforming lives through sport."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-10 border-t-4 border-[#1544C0] hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-[#1544C0] mb-6">Goals</h3>
              <ul className="text-lg text-gray-700 space-y-4">
                {[
                  'Promote blind cricket in rural regions',
                  'Identify and nurture new talent',
                  'Create inclusive sporting opportunities',
                  'Represent Vidarbha at national level'
                ].map((goal, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-[#1544C0] text-2xl">•</span>
                    <span className="font-medium">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GameFormat;
