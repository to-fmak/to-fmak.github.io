import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Container, LeftPanel, RightPanel, Name, Title, Button, Description, SocialIcons, IconLink, HamburgerMenuContainer, DropdownMenu, MenuItem } from './styles/AppStyles';
import { FaTwitter, FaInstagram, FaSoundcloud, FaBars } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';
import GearsPage from './pages/GearsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/gears" element={<GearsPage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

const PetsPage: React.FC = () => {
  return <h1>Pets Page</h1>;
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <Container>
        <HamburgerMenuContainer>
          <FaBars onClick={toggleMenu} />
          {menuOpen && (
            <DropdownMenu>
              <MenuItem onClick={() => handleMenuItemClick('/')}>Home</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/gears')}>Gears</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/pets')}>Pets</MenuItem>
            </DropdownMenu>
          )}
        </HamburgerMenuContainer>
      <LeftPanel />
      <RightPanel>
        <div>
          <Name>Wenzhang</Name>
          <Title>Software Engineer</Title>
          <Button href="https://github.com/to-fmak" target="_blank" rel="noopener noreferrer">
            View GitHub
          </Button>
          <Description>
              Hi, I'm Wenzhang, a Cloud Platform Engineer and Full Stack Developer based in Japan.
              I’m also a passionate guitarist and DTM enthusiast.
              To learn more about my work experience, feel free to visit my GitHub.
              Don't hesitate to reach out to me through any of the following platforms.
          </Description>
        </div>
        <SocialIcons>
          <IconLink href="https://x.com/to__fmak" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </IconLink>
          <IconLink href="https://qiita.com/to-fmak" target="_blank" rel="noopener noreferrer">
            <SiQiita />
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
