import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import { HamburgerMenuContainerWrapper, DropdownMenu, MenuItem } from '../styles/HamburgerMenuStyles';
import { IconButton } from '../styles/LayoutStyles';
import { navItems } from './navItems';

const HamburgerMenuContainer: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <HamburgerMenuContainerWrapper ref={wrapperRef}>
      <IconButton onClick={() => setMenuOpen(!menuOpen)} aria-label={t('common.menu')} aria-expanded={menuOpen}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </IconButton>
      {menuOpen && (
        <DropdownMenu>
          {navItems.map(({ path, label }) => (
            <MenuItem key={path} to={path} end onClick={() => setMenuOpen(false)}>
              {t(label)}
            </MenuItem>
          ))}
        </DropdownMenu>
      )}
    </HamburgerMenuContainerWrapper>
  );
};

export default HamburgerMenuContainer;
