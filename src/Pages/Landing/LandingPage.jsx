import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Landing.css';
import logo from '../../Assets/Logo.png';

const LandingPage = () => {

  // Simple code snippet so no one can steal the code and assets

  document.addEventListener('contextmenu', event => event.preventDefault());

  // Initialize Framer Motion controls for animations

  const controls = useAnimation();

  // Trigger animations when the component mounts

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 120,
        bounce: 0.4,
      },
    });
  }, [controls]);

  return (

    // Main container with animations

    <motion.main
      initial={{ opacity: 0, y: 100, rotate: -20, scale: 0.8 }}
      animate={controls}
      exit={{ opacity: 0 }}
    >

      {/* Custom opening animation for the logo */}

      <motion.img
        src={logo}
        alt="Jabali Logo"
        className="Logo"
        initial={{ y: -50, opacity: 0, rotate: -360, scale: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        whileHover={{ scale: 5, rotate: -3 }}
      />

      {/* Dynamic opening animation for the heading */}
      <motion.h2
        initial={{ y: -20, opacity: 0, rotate: -30, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        Coming Soon
      </motion.h2>

      {/* Dynamic opening animation for the paragraph */}
      <motion.p
        initial={{ y: 20, opacity: 0, rotate: 30, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        Get Notified When We Launch!
      </motion.p>

      {/* Form container with entrance animation */}

      <motion.div
        className="form"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Form with email input and submit button */}

        <motion.form action="">
          <input
            type="email"
            autoComplete="off"
            placeholder="Enter Your Email"
            className="Email-Form"
            required
          />
          <motion.input
            value="Get Notified"
            type="submit"
            className="btn"

            // Button scale and rotation animations on hover and tap

            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
          />
        </motion.form>
      </motion.div>
    </motion.main>
  );
};

export default LandingPage;