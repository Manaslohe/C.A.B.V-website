import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronLeft, Facebook, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    setSubmitStatus('sending');
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setSubmitStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Contact Numbers",
      values: ["+91 8459023689", "+91 9423603630"],
      type: "tel"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Address",
      values: ["vidharbha.blindcricket@gmail.com"],
      type: "email"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      values: ["Vidarbha Cricket Association", "Civil Lines, Nagpur"],
      type: "text"
    }
  ];

  const socialLinks = [
    { platform: 'facebook', url: '#', icon: <Facebook className="w-4 h-4 md:w-5 md:h-5" /> },
    { platform: 'linkedin', url: '#', icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" /> },
    { platform: 'instagram', url: '#', icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" /> }
  ];

  const internalStyles = `
    .pattern-cricket {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E");
      background-size: 30px 30px;
    }

    @media (max-width: 768px) {
      .mobile-scroll {
        height: auto;
        min-height: 100vh;
        padding-bottom: 2rem;
      }
      
      .mobile-container {
        height: auto;
        min-height: 0;
      }
    }
  `;

  return (
    <>
      <style>{internalStyles}</style>
      <div className="h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 relative overflow-y-auto mobile-scroll">
        {/* Cricket Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pattern-cricket" />

        {/* Navigation Elements - Adjusted for mobile */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          {/* Back Button - Mobile optimized */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link 
              to="/"
              className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full
                hover:bg-white/20 transition-all duration-300 text-white group text-sm md:text-base"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </motion.div>

          {/* Social Links - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2 md:gap-4"
          >
            {socialLinks.map(({ platform, url, icon }) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
                  hover:bg-white/20 transition-all duration-300 text-white"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 pt-20 flex flex-col min-h-full">
          {/* Header - Reduced size on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-12"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto px-2">
              Join us in making cricket accessible to everyone. Your support and queries matter to us.
            </p>
          </motion.div>

          {/* Contact Grid - Responsive layout */}
          <div className="flex-1 grid md:grid-cols-2 gap-6 md:gap-8 items-start max-w-6xl mx-auto mb-8 mobile-container">
            {/* Contact Information Card - Compact for mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 flex flex-col"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 relative inline-block">
                Contact Details
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              </h2>

              <div className="grid gap-4 content-start">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl hover:bg-white/10 
                      transition-all duration-300 group"
                  >
                    <div className="bg-blue-500/20 p-2 md:p-3 rounded-lg group-hover:bg-blue-500/30 
                      transition-colors duration-300 text-blue-300">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-blue-200 text-sm md:text-lg font-medium mb-1 md:mb-2">
                        {item.label}
                      </h3>
                      <div className="space-y-1">
                        {item.values.map((value, idx) => (
                          <p key={idx} className="text-white text-base">
                            {item.type !== 'text' ? (
                              <a
                                href={`${item.type === 'tel' ? 'tel:' : 'mailto:'}${value.replace(/\s/g, '')}`}
                                className="hover:text-blue-300 transition-colors duration-300"
                              >
                                {value}
                              </a>
                            ) : (
                              value
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form Card - Compact for mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 flex flex-col"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 relative inline-block">
                Send Message
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-white/10 border border-white/20 
                      text-white placeholder:text-blue-200 text-sm md:text-base focus:outline-none focus:border-white/40
                      backdrop-blur-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-white/10 border border-white/20 
                      text-white placeholder:text-blue-200 text-sm md:text-base focus:outline-none focus:border-white/40
                      backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-white/10 border border-white/20 
                      text-white placeholder:text-blue-200 text-sm md:text-base focus:outline-none focus:border-white/40
                      backdrop-blur-sm"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="3"
                    className="flex-1 min-h-[100px] w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-white/10 
                      border border-white/20 text-white placeholder:text-blue-200 text-sm md:text-base focus:outline-none focus:border-white/40
                      backdrop-blur-sm resize-none"
                  ></textarea>
                </div>
                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 
                      text-white font-semibold text-lg hover:from-blue-600 hover:to-blue-700 
                      transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    {submitStatus === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </motion.button>

                  {/* Success Message */}
                  {submitStatus === 'sent' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500/20 text-green-300 p-4 rounded-xl text-center"
                    >
                      Message sent successfully!
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
