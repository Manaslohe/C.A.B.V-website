import React from 'react';
import { motion } from 'framer-motion';
// Import images from local board folder
import advAnand from './board/adv. anand.jpeg';
import drBabanrao from './board/dr-babanrao-taywade.jpg';
import profLaxman from './board/prof-laxman-khapekar.jpg';
import peterAlvarez from './board/shri-peter-alvarez.jpg';
import drBhau from './board/dr-bhau-daydar.jpg';
import yogeshChaudhary from './board/yogesh-chaudhary.jpg';
import advShriganesh from './board/adv-shriganesh-abhyankar.jpg';
import drYashwant from './board/dr-yashwant-patil.jpg';
import drShilpa from './board/dr-shilpa-deshpande.jpg';

// Base64 placeholder image
const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZWVlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZpbHk9IkFyaWFsIiBmb250LXNpemU9IjI4IiBmaWxsPSIjYWFhYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbiI+Tm8gSW1hZ2U8L3RleHQ+PC9zdmc+";

const committeeMembers = [
  {
    name: "ADV. Anand Parchure",
    role: "President",
    image: advAnand
  },
  {
    name: "Dr. Babanrao Taywade",
    role: "Vice President",
    image: drBabanrao
  },
  {
    name: "Prof. Laxman H Khapekar",
    role: "Secretary",
    image: profLaxman
  },
  {
    name: "Shri. C. Peter Alvarez",
    role: "Joint Secretary",
    image: peterAlvarez
  },
  {
    name: "Dr. Bhau Daydar",
    role: "Treasurer",
    image: drBhau
  },
  {
    name: "Shri. Yogesh Chaudhary",
    role: "Executive Member",
    image: yogeshChaudhary
  },
  {
    name: "ADV. ShriGanesh Abhyankar",
    role: "Executive Member",
    image: advShriganesh
  },
  {
    name: "Dr. Yashwant Patil",
    role: "Executive Member",
    image: drYashwant
  },
  {
    name: "Dr. Shilpa Shirish Deshpande",
    role: "Executive Member",
    image: drShilpa
  }
];

const Committee = () => {
  return (
    <section id="committee" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1544c0] mb-4">Committee Members</h2>
          <div className="w-24 h-1 bg-[#1544c0] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {committeeMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-[400px] w-full relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <motion.div 
                className="p-6 text-center bg-white"
                whileHover={{ backgroundColor: "#f8fafc" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#1544c0] font-medium">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;
