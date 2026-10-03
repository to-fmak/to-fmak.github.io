import React from 'react';
import { useTranslation } from 'react-i18next';
import { GiGuitarHead } from 'react-icons/gi';
import {
  Shell,
  HeaderBar,
  HeaderInner,
  Brand,
  NavLinks,
  NavItem,
  Spacer,
  Main,
  Footer,
} from '../styles/LayoutStyles';
import HamburgerMenuContainer from './HamburgerMenuContainer';
import LanguageSwitch from './LanguageSwitch';
import ThemeToggle from './ThemeToggle';
import { navItems } from './navItems';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <Shell>
      <HeaderBar>
        <HeaderInner>
          <Brand to="/">
            <GiGuitarHead />
            Wenzhang
          </Brand>
          <NavLinks>
            {navItems.map(({ path, label }) => (
              <NavItem key={path} to={path} end>
                {t(label)}
              </NavItem>
            ))}
          </NavLinks>
          <Spacer />
          <LanguageSwitch />
          <ThemeToggle />
          <HamburgerMenuContainer />
        </HeaderInner>
      </HeaderBar>
      <Main>{children}</Main>
      <Footer>&copy; {new Date().getFullYear()} Wenzhang</Footer>
    </Shell>
  );
};

export default Layout;
