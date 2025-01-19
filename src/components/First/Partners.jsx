const Partners = () => {
  const partners = [
    {
      title: "Organisational Partner",
      name: "Rashtriy Drishtihin Shikshan AVN Punarvasan Sanstha Nagpur",
      description: "A premier institute in Nagpur dedicated to the education and all-around development of visually impaired persons. Their Gyan Jyoti school stands as one of the top institutes across Vidarbha, empowering students through comprehensive education and support.",
      website: "https://rdspsngp.org/",
      linkText: "Visit Website"
    },
    {
      title: "Digital Partner",
      name: "Sports Club Official India",
      description: "A dedicated organization leveraging social media to promote blind cricket and various sports, creating awareness and fostering inclusivity in sports across India.",
      website: "https://www.youtube.com/c/Sportsclubofficial",
      linkText: "Visit YouTube Channel"
    }
  ];

  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-[#1544c0] mb-4">Our Partners</h2>
          <div className="w-24 h-1 bg-[#1544c0] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="fade-in bg-white rounded-lg shadow-lg p-8"
              data-animation-delay={250 * index}
            >
              <h3 className="text-xl font-bold text-[#1544c0] mb-2">{partner.title}</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{partner.name}</h4>
              <p className="text-gray-600 mb-6">{partner.description}</p>
              <a 
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#1544c0] hover:text-[#1544c0]/80"
              >
                {partner.linkText}
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
