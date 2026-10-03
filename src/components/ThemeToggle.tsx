import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IconButton } from '../styles/LayoutStyles';

type Theme = 'light' | 'dark';

// public/index.html sets data-theme before the first paint, so start from it
const getInitialTheme = (): Theme =>
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <IconButton onClick={toggleTheme} aria-label={t('common.toggleTheme')}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          style={{ display: 'inline-flex' }}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <FiMoon /> : <FiSun />}
        </motion.span>
      </AnimatePresence>
    </IconButton>
  );
};

export default ThemeToggle;
