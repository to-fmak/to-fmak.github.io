import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { HamburgerMenuContainerWrapper, DropdownMenu, MenuItem, MenuDivider, LanguageOptions, LangOption } from '../styles/HamburgerMenuStyles';

const HamburgerMenuContainer: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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
          <MenuItem onClick={() => handleMenuItemClick('/')}>{t('nav.home')}</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/gears')}>{t('nav.gears')}</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/guitars')}>{t('nav.guitars')}</MenuItem>
          <MenuDivider />
          <LanguageOptions>
            <LangOption $active={i18n.language === 'en'} onClick={() => i18n.changeLanguage('en')}>
              EN
            </LangOption>
            <LangOption $active={i18n.language === 'zh'} onClick={() => i18n.changeLanguage('zh')}>
              中文
            </LangOption>
          </LanguageOptions>
        </DropdownMenu>
      )}
    </HamburgerMenuContainerWrapper>
  );
};

export default HamburgerMenuContainer;
