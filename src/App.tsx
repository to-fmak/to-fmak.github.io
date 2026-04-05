import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, type Transition } from 'framer-motion';
import { Container, LeftPanel, RightPanel, Name, Title, Button, Description, SocialIcons, IconLink } from './styles/AppStyles';
import { FaInstagram, FaSoundcloud } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';
import { SiZenn } from 'react-icons/si';
import GearsPage from './pages/GearsPage';
import GuitarPage from './pages/GuitarPage';
import HamburgerMenuContainer from './components/HamburgerMenuContainer';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const pageTransition: Transition = { duration: 0.3, ease: 'easeInOut' };

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
            <Home />
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
            <Home />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <Container>
      <HamburgerMenuContainer />
      <LeftPanel />
      <RightPanel>
        <div>
          <Name>Wenzhang</Name>
          <Title>Software Engineer</Title>
          <Button href="https://github.com/to-fmak" target="_blank" rel="noopener noreferrer">
            View GitHub
          </Button>
          <Description>
            Hi, I'm Wenzhang, a Cloud DevOps Engineer and Full Stack Developer based in Japan.<br />
            I'm also a passionate guitarist and DTM enthusiast. <br />
            To learn more about my work experience, feel free to visit my GitHub and tech blogs.<br />
            Don't hesitate to reach out to me through any of the following platforms.
          </Description>
        </div>
        <SocialIcons>
          <IconLink href="https://qiita.com/to-fmak" target="_blank" rel="noopener noreferrer">
            <SiQiita />
          </IconLink>
          <IconLink href="https://zenn.dev/to_fmak" target="_blank" rel="noopener noreferrer">
            <SiZenn />
          </IconLink>
          <IconLink href="https://www.instagram.com/fmak_t?igsh=dmdtbHV3dDQ1NDUy&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </IconLink>
          <IconLink href="https://soundcloud.com/eojpr45qbooo" target="_blank" rel="noopener noreferrer">
            <FaSoundcloud />
          </IconLink>
        </SocialIcons>
      </RightPanel>
    </Container>
  );
};

export default App;
