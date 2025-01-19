import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Donation = () => {
  const [copyStatus, setCopyStatus] = useState('');

  const bankDetails = {
    name: "Cricket Asociation for the Blind in Vidarbha",
    accountNo: "872210210000022",
    ifscCode: "BKID0008722",
    branch: "Rana Pratapnagar"
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(`${type} copied!`);
    setTimeout(() => setCopyStatus(''), 2000);
  };

  const handleBack = () => {
    window.history.back();
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "name": "Donate to CABV",
    "description": "Support blind cricket in Vidarbha by donating to CABV",
    "organization": {
      "@type": "NGO",
      "name": "Cricket Association for the Blind in Vidarbha",
      "alternateName": "CABV"
    },
    "provider": {
      "@type": "BankOrCreditUnion",
      "name": "Bank of India",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rana Pratapnagar",
        "addressRegion": "Vidarbha"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Donate to CABV | Support Blind Cricket in Vidarbha</title>
        <meta name="description" content="Support blind cricket in Vidarbha. Your donations help us organize tournaments, provide training, and empower visually impaired cricketers." />
        <meta name="keywords" content="donate to CABV, blind cricket donations, support blind cricket, Vidarbha cricket donation, visually impaired sports support" />
        <link rel="canonical" href="https://www.blindcricketvidarbha.in/donation" />
        <meta property="og:title" content="Donate to CABV - Support Blind Cricket" />
        <meta property="og:description" content="Your donation helps make cricket accessible to visually impaired players in Vidarbha." />
        <meta property="og:url" content="https://www.blindcricketvidarbha.in/donation" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 overflow-x-hidden">
        <div className="container mx-auto px-4 py-6 flex flex-col min-h-screen">
          {/* Back Button */}
          <motion.button
            onClick={handleBack}
            className="absolute top-4 left-4 text-white flex items-center gap-2 
              hover:bg-white/10 rounded-lg p-2 transition-colors duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back</span>
          </motion.button>

          {/* Logo Section - Smaller on mobile */}
          <motion.div 
            className="text-center mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src="/images/favicon.png"
                alt="Logo"
                className="w-28 sm:w-40 h-auto mx-auto"
              />
            </Link>
          </motion.div>

          {/* Main Text - Adjusted size for mobile */}
          <motion.div 
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Support Our Cause
            </h1>
            <p className="text-lg sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Join us in creating a brighter future for blind cricketers. Your donation fuels 
              the power of compassion, making every swing of the bat a testament to hope.
            </p>
          </motion.div>

          {/* Containers Grid - Responsive layout */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-6 items-start">
            {/* Bank Details Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-8 h-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
                Bank Details
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {Object.entries(bankDetails).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-base sm:text-lg text-blue-100 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono text-base sm:text-lg">{value}</span>
                      {(key === 'accountNo' || key === 'ifscCode') && (
                        <button
                          onClick={() => handleCopy(value, key)}
                          className="p-1.5 sm:p-2 bg-white/20 rounded-lg hover:bg-white/30 
                            transition-colors duration-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" 
                            viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {copyStatus && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 text-center text-green-400 text-sm sm:text-base"
                >
                  {copyStatus}
                </motion.div>
              )}
            </motion.div>

            {/* UPI Payment Card - Adjusted for better mobile view */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-full"
            >
              <a href="upi://pay?pa=9423603630@boi" className="block h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-8 h-full
                    hover:bg-white/20 transition-all duration-300
                    border-2 border-white/20 flex flex-col items-center justify-center"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
                    Pay with UPI
                  </h3>
                  <div className="w-48 h-48 sm:w-64 sm:h-64">
                    <img 
                      src="/images/upi.png" 
                      alt="UPI QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;
