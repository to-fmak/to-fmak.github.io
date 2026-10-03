import React from "react";
import { useTranslation } from "react-i18next";
import {
  CardContainer,
  CardGrid,
  CardImage,
  CardText,
  PageHeader,
  PageIntro,
  PageTitle,
} from "../styles/SubPageStyles";
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

const guitars = [
  { image: guitar00, text: "guitars.g00" },
  { image: guitar01, text: "guitars.g01" },
  { image: guitar02, text: "guitars.g02" },
  { image: guitar03, text: "guitars.g03" },
  { image: guitar04, text: "guitars.g04" },
  { image: guitar05, text: "guitars.g05" },
  { image: guitar06, text: "guitars.g06" },
  { image: guitar07, text: "guitars.g07" },
  { image: guitar08, text: "guitars.g08" },
  { image: guitar09, text: "guitars.g09" },
];

const GuitarPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader>
        <PageTitle>{t("nav.guitars")}</PageTitle>
        <PageIntro>{t("guitars.intro")}</PageIntro>
      </PageHeader>
      <CardGrid>
        {guitars.map(({ image, text }) => (
          <AnimatedCard key={text}>
            <CardContainer>
              <CardImage src={image} alt={t(text)} loading="lazy" />
              <CardText>{t(text)}</CardText>
            </CardContainer>
          </AnimatedCard>
        ))}
      </CardGrid>
    </>
  );
};

export default GuitarPage;
