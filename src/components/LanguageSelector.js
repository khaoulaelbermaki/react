import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleChangeLanguage = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleChangeLanguage}>
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  );
};

export default LanguageSelector;
