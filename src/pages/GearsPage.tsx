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
import keyboardsImage from "../assets/images/gears/keyboards.jpg";
import iphoneImage from "../assets/images/gears/iphone15.jpg";
import m2MacImage from "../assets/images/gears/m2-macbook-pro.jpg";
import subMonitorImage from "../assets/images/gears/sub-monitor.jpg";
import beatsStudioImage from "../assets/images/gears/beats-studio.jpg";
import airPodsImage from "../assets/images/gears/airpods.jpg";
import deskSetUp2023Image from "../assets/images/gears/setup2022-2023.jpg";
import deskSetUp2024Image from "../assets/images/gears/setup2023-2024.jpg";
import deskSetUp2025Image from "../assets/images/gears/setup2025.png";
import deskSetUp2026Image from "../assets/images/gears/setup2026.jpg";
import studioDisplayImage from "../assets/images/gears/studio-display2026.jpg";
import ergotronImage from "../assets/images/gears/ergotron-lx.jpg";

const gears = [
  { image: deskSetUp2026Image, text: "gears.setup2026" },
  { image: deskSetUp2025Image, text: "gears.setup2025" },
  { image: deskSetUp2024Image, text: "gears.setup2024" },
  { image: deskSetUp2023Image, text: "gears.setup2023" },
  { image: studioDisplayImage, text: "gears.studioDisplay" },
  { image: ergotronImage, text: "gears.ergotron" },
  { image: iphoneImage, text: "gears.iphone" },
  { image: keyboardsImage, text: "gears.keyboards" },
  { image: m2MacImage, text: "gears.macbook" },
  { image: subMonitorImage, text: "gears.monitor" },
  { image: beatsStudioImage, text: "gears.beats" },
  // position: object-position for the square thumbnail crop when the subject isn't centered
  { image: airPodsImage, text: "gears.airpods", position: "center bottom" },
];

const GearsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader>
        <PageTitle>{t("nav.gears")}</PageTitle>
        <PageIntro>{t("gears.intro")}</PageIntro>
      </PageHeader>
      <CardGrid>
        {gears.map(({ image, text, position }) => (
          <AnimatedCard key={text}>
            <CardContainer>
              <CardImage src={image} alt={t(text)} loading="lazy" style={{ objectPosition: position }} />
              <CardText>{t(text)}</CardText>
            </CardContainer>
          </AnimatedCard>
        ))}
      </CardGrid>
    </>
  );
};

export default GearsPage;
