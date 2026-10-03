import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion, type Transition } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GearsPage from './pages/GearsPage';
import GuitarPage from './pages/GuitarPage';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const pageTransition: Transition = { duration: 0.3, ease: 'easeInOut' };

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
            <HomePage />
          </motion.div>
        } />
        <Route path="/gears" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
            <GearsPage />
          </motion.div>
        } />
        <Route path="/guitars" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
            <GuitarPage />
          </motion.div>
        } />
        <Route path="*" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
            <HomePage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </MotionConfig>
    </Router>
  );
};

export default App;
