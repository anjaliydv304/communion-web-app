import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HomePage() {
  
  const headingControl = useAnimation();
  const paragraphControl = useAnimation();
  const buttonControl = useAnimation();
  
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [paragraphRef, paragraphInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  
  const heading2Control = useAnimation();
  const paragraph2Control = useAnimation();
  const button2Control = useAnimation();
  
  const [heading2Ref, heading2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [paragraph2Ref, paragraph2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [button2Ref, button2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    if (headingInView) {
      headingControl.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    }
    
    if (paragraphInView) {
      paragraphControl.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
      });
    }
    
    if (buttonInView) {
      buttonControl.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
      });
    }
  }, [headingInView, paragraphInView, buttonInView, headingControl, paragraphControl, buttonControl]);
  
  useEffect(() => {
    if (heading2InView) {
      heading2Control.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    }
    
    if (paragraph2InView) {
      paragraph2Control.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
      });
    }
    
    if (button2InView) {
      button2Control.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
      });
    }
  }, [heading2InView, paragraph2InView, button2InView, heading2Control, paragraph2Control, button2Control]);
  
  return (
    <div>
      <section className="py-40 h-screen relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.meltingpot.com/towson-md/files/3126/Careers-Hands-Header-Desktop.jpg')"}}> 
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1 
              ref={headingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={headingControl}
              className="text-5xl text-white font-extrabold leading-tight mb-8"
            >
              Unite, Innovate, Inspires
              Together
            </motion.h1>
            
            <motion.p 
              ref={paragraphRef}
              initial={{ opacity: 0, y: 20 }}
              animate={paragraphControl}
              className="text-white text-2xl font-light mb-10"
            >
              Join us to be part of a community where spirituality meets innovation. Together, we'll build a world that's more inclusive, engaging, and connected than ever before!
            </motion.p>
            
            <motion.div
              ref={buttonRef}
              initial={{ opacity: 0, y: 20 }}
              animate={buttonControl}
            >
              <Link 
                to="/events" 
                className="inline-block bg-teal-700 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-800 transition"
              >
                Explore Events
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-teal-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            ref={heading2Ref}
            initial={{ opacity: 0, y: 20 }}
            animate={heading2Control}
            className="text-4xl text-teal-700 font-light mb-12"
          >
            Connecting People Across Faiths & Interests
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <motion.p 
              ref={paragraph2Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={paragraph2Control}
              className="text-teal-700 text-xl font-light mb-10"
            >
              We believe a regular look in the mirror contributes to a healthier society. 
              Communion App helps you connect with like-minded individuals through events 
              and community support, regardless of your faith or interests.
            </motion.p>
            
            <motion.div
              ref={button2Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={button2Control}
            >
              <Link 
                to="/events" 
                className="inline-block bg-teal-700 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-800 transition"
              >
                Discover Community Events
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;