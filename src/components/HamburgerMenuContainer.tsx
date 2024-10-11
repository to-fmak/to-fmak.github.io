import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { HamburgerMenuContainerWrapper, DropdownMenu, MenuItem } from '../styles/HamburgerMenuStyles';

const HamburgerMenuContainer: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <HamburgerMenuContainerWrapper>
      <FaBars onClick={toggleMenu} />
      {menuOpen && (
        <DropdownMenu>
          <MenuItem onClick={() => handleMenuItemClick('/')}>Home</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/gears')}>Gears</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/guitars')}>Guitars</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/life')}>Life</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/videos')}>Videos</MenuItem>
        </DropdownMenu>
      )}
    </HamburgerMenuContainerWrapper>
  );
};

export default HamburgerMenuContainer;
