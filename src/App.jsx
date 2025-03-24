import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <header className="bg-slate-900 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-teal-600 font-bold text-xl"><a href='/'>Communion</a></div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-teal-500 hover:text-teal-600">Home</Link></li>
                <li><Link to="/events" className="text-teal-500 hover:text-teal-600">Events</Link></li>
                <li><Link to="/about" className="text-teal-500 hover:text-teal-600">About</Link></li>
              </ul>
            </nav>
            <div>
              <button className="bg-teal-700 text-white px-4 py-2 rounded-full text-sm cursor-pointer">Login</button>
              <button className="ml-2 bg-teal-800 text-white px-4 py-2 rounded-full text-sm cursor-pointer">Work with us</button>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
function AboutPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.h1 
          className="text-4xl text-teal-700 font-bold mb-6"
          variants={variants}
        >
          About Communion
        </motion.h1>
        
        <motion.p 
          className="text-teal-700 text-xl font-light max-w-3xl mb-12"
          variants={variants}
        >
          Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            className="rounded-lg overflow-hidden shadow-md"
            variants={imageVariants}
          >
            <img 
              src="https://media.istockphoto.com/id/1153816876/photo/smiling-group-of-people-walking-together-outdoors.jpg?s=612x612&w=0&k=20&c=fmWuzI08_wlIHy2Y3Ovs0ZnZgtMPYKN3ecHML51qw78=" 
              alt="Community gathering" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl text-teal-700 font-medium mb-2">Our Community</h3>
              <p className="text-gray-700">
                We bring together people from all walks of life, creating spaces where meaningful connections flourish regardless of background or belief.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-lg overflow-hidden shadow-md"
            variants={imageVariants}
          >
            <img 
              src="https://media.istockphoto.com/id/1480574526/photo/happy-multigenerational-people-having-fun-sitting-on-grass-in-a-public-park.jpg?s=612x612&w=0&k=20&c=iIzSiY2FK9mWTCmV8Ip8zpvXma7f1Qbd-UuKXNJodPg=" 
              alt="Interfaith event" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl text-teal-700 font-medium mb-2">Our Mission</h3>
              <p className="text-gray-700">
                We're dedicated to building bridges across different faith traditions while fostering mutual respect, understanding, and collaborative innovation.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md max-w-3xl"
          variants={variants}
        >
          <h2 className="text-2xl text-teal-700 font-medium mb-4">Join Our Journey</h2>
          <p className="text-gray-700 mb-4">
            Whether you're seeking spiritual growth, meaningful connections, or opportunities to serve your community, Communion provides the platform and resources you need to thrive.
          </p>
          <button className="bg-teal-700 text-white px-6 py-2 rounded-full text-sm hover:bg-teal-800 transition">
            Learn More About Our Values
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;