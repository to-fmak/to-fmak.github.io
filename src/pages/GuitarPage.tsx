import React from "react";
import { useTranslation } from "react-i18next";
import {
  CardContainer,
  CardImage,
  CardText,
  SubPageContainer,
} from "../styles/SubPageStyles";
import HamburgerMenuContainer from "../components/HamburgerMenuContainer";
import AnimatedCard from "../components/AnimatedCard";
import guitar00 from "../assets/images/guitars/00.jpg";
import guitar01 from "../assets/images/guitars/01.jpg";
import guitar02 from "../assets/images/guitars/02.jpg";
import guitar03 from "../assets/images/guitars/03.jpg";
import guitar04 from "../assets/images/guitars/04.jpg";
import guitar05 from "../assets/images/guitars/05.jpg";
import guitar06 from "../assets/images/guitars/06.jpg";
import guitar07 from "../assets/images/guitars/07.jpg";
import guitar08 from "../assets/images/guitars/08.jpg";
import guitar09 from "../assets/images/guitars/09.jpg";

const GearsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HamburgerMenuContainer />
      <SubPageContainer>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar00} alt="Sample" />
        <CardText>{t("guitars.g00")}</CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar01} alt="Sample" />
          <CardText>{t("guitars.g01")}</CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar02} alt="Sample" />
          <CardText>{t("guitars.g02")}</CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar03} alt="Sample" />
          <CardText>
            {t("guitars.g03")}
          </CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar04} alt="Sample" />
          <CardText>
            {t("guitars.g04")}
          </CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar05} alt="Sample" />
          <CardText>
            {t("guitars.g05")}
          </CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar06} alt="Sample" />
          <CardText>{t("guitars.g06")}</CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar07} alt="Sample" />
          <CardText>
            {t("guitars.g07")}
          </CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar08} alt="Sample" />
          <CardText>
           {t("guitars.g08")}
          </CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={guitar09} alt="Sample" />
          <CardText>
            {t("guitars.g09")}
          </CardText>
        </CardContainer></AnimatedCard>
      </SubPageContainer>
    </div>
  );
};

export default GearsPage;
