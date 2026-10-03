import React from 'react';
import { useTranslation } from 'react-i18next';
import { LangOption, LangSwitch } from '../styles/LayoutStyles';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
];

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <LangSwitch>
      {languages.map(({ code, label }) => (
        <LangOption
          key={code}
          $active={i18n.resolvedLanguage === code}
          aria-pressed={i18n.resolvedLanguage === code}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </LangOption>
      ))}
    </LangSwitch>
  );
};

export default LanguageSwitch;
