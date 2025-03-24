import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function EventsPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Interfaith Dialogue',
      date: '2025-04-15',
      location: 'Community Center',
      category: 'Religious',
      description: 'A discussion on common values across different faith traditions.'
    },
    {
      id: 2,
      title: 'Community Cleanup',
      date: '2025-04-22',
      location: 'City Park',
      category: 'Charity',
      description: 'Join us to clean our local park and make a difference.'
    },
    {
      id: 3,
      title: 'Monthly Social Mixer',
      date: '2025-05-01',
      location: 'The Grand Hall',
      category: 'Social',
      description: 'Meet new friends and connect with your community.'
    }
  ]);

  const [filter, setFilter] = useState('All');
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    category: 'Religious',
    description: ''
  });
  
  const [animateCards, setAnimateCards] = useState(false);
  
  
  useEffect(() => {
    setAnimateCards(false);
   
    setTimeout(() => setAnimateCards(true), 100);
  }, [filter]);
  

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  const addEvent = (e) => {
    e.preventDefault();
    const id = events.length ? Math.max(...events.map(e => e.id)) + 1 : 1;
    setEvents([...events, { ...newEvent, id }]);
    setNewEvent({
      title: '',
      date: '',
      location: '',
      category: 'Religious',
      description: ''
    });
  };

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);

  
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const categoryButtonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl text-teal-700 font-light mb-6"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        Community Events
      </motion.h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="mb-6">
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              variants={categoryVariants}
              initial="hidden"
              animate="visible"
            >
              {['All', 'Religious', 'Social', 'Charity'].map(category => (
                <motion.button 
                  key={category}
                  variants={categoryButtonVariants}
                  className={`px-4 py-2 rounded-full text-sm ${
                    filter === category 
                      ? 'bg-teal-700 text-white' 
                      : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                  }`}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={animateCards ? "visible" : "hidden"}
          >
            {filteredEvents.map((event, index) => (
              <motion.div 
                key={event.id} 
                className="bg-white p-6 rounded-lg shadow-sm"
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl text-teal-700 font-medium">{event.title}</h2>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </span>
                </div>
                <div className="mt-2 text-gray-600">
                  <p className="mb-1">📅 {new Date(event.date).toLocaleDateString()}</p>
                  <p className="mb-3">📍 {event.location}</p>
                </div>
                <p className="text-gray-700">{event.description}</p>
              </motion.div>
            ))}

            {filteredEvents.length === 0 && (
              <motion.div 
                className="text-center py-8 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                No events found. Try changing your filter or add a new event.
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.div 
          className="lg:w-1/4 bg-white p-6 rounded-lg shadow-sm h-fit"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl text-teal-700 font-medium mb-4">Add New Event</h2>
          <form onSubmit={addEvent}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded"
                value={newEvent.title}
                onChange={e => setNewEvent({...newEvent, title: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                required
                className="w-full p-2 border border-gray-300 rounded"
                value={newEvent.date}
                onChange={e => setNewEvent({...newEvent, date: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded"
                value={newEvent.location}
                onChange={e => setNewEvent({...newEvent, location: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Category</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={newEvent.category}
                onChange={e => setNewEvent({...newEvent, category: e.target.value})}
              >
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Description</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="3"
                value={newEvent.description}
                onChange={e => setNewEvent({...newEvent, description: e.target.value})}
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add Event
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default EventsPage;