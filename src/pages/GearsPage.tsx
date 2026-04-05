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
import keyboardsImage from "../assets/images/gears/keyboards.jpg";
import iphoneImage from "../assets/images/gears/iphone15.jpg";
import m2MacImage from "../assets/images/gears/m2-macbook-pro.jpg";
import subMonitorImage from "../assets/images/gears/sub-monitor.jpg";
import beatsStudioImage from "../assets/images/gears/beats-studio.jpg";
import airPodsImage from "../assets/images/gears/airpods.jpg";
import deskSetUp2023Image from "../assets/images/gears/setup2022-2023.jpg";
import deskSetUp2024Image from "../assets/images/gears/setup2023-2024.jpg";
import deskSetUp2025Image from "../assets/images/gears/setup2025.png";

const GearsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HamburgerMenuContainer />
      <SubPageContainer>
        <AnimatedCard><CardContainer>
          <CardImage src={deskSetUp2025Image} alt="Sample" />
          <CardText>{t("gears.setup2025")}</CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={deskSetUp2024Image} alt="Sample" />
          <CardText>{t("gears.setup2024")}</CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={deskSetUp2023Image} alt="Sample" />
          <CardText>{t("gears.setup2023")}</CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={iphoneImage} alt="Sample" />
          <CardText>
            {t("gears.iphone")}
          </CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={keyboardsImage} alt="Sample" />
          <CardText>
            {t("gears.keyboards")}
          </CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={m2MacImage} alt="Sample" />
          <CardText>
            {t("gears.macbook")}
          </CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={subMonitorImage} alt="Sample" />
          <CardText>{t("gears.monitor")}</CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={beatsStudioImage} alt="Sample" />
          <CardText>
            {t("gears.beats")}
          </CardText>
        </CardContainer></AnimatedCard>
        <AnimatedCard><CardContainer>
          <CardImage src={airPodsImage} alt="Sample" />
          <CardText>
            {t("gears.airpods")}
          </CardText>
        </CardContainer></AnimatedCard>
      </SubPageContainer>
    </div>
  );
};

export default GearsPage;
