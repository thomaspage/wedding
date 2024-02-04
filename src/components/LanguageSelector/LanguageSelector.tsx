import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Hamburger,
  LanguageSelectorContainer,
} from "./LanguageSelector.styles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({}) => {

  const { i18n } = useTranslation();

  const isEnglish = i18n.resolvedLanguage === "en";
  
  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "fr" : "en");
  }

  return (
    <LanguageSelectorContainer>
      <Hamburger color="inherit" onClick={toggleLanguage}>{isEnglish ? "fr" : "en"}</Hamburger>

    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
