import React from "react";
import {
  CardContainer,
  CardImage,
  CardText,
  SubPageContainer,
} from "../styles/SubPageStyles";
import HamburgerMenuContainer from "../components/HamburgerMenuContainer";
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
  return (
    <div>
      <HamburgerMenuContainer />
      <SubPageContainer>
        <CardContainer>
          <CardImage src={deskSetUp2025Image} alt="Sample" />
          <CardText>My Desk Setup 2025 ~ </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={deskSetUp2024Image} alt="Sample" />
          <CardText>My Desk Setup 2024 ~</CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={deskSetUp2023Image} alt="Sample" />
          <CardText>My Desk Setup 2022 ~ 2023</CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={iphoneImage} alt="Sample" />
          <CardText>
            iPhone: I've been an Apple user for over 10 years and am currently
            using the iPhone 16 Pro.
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={keyboardsImage} alt="Sample" />
          <CardText>
            Keychron K2V2 and K3: The K2V2 has red switches, while the K3 has
            brown switches. Personally, I prefer the typing feel of the K2V2.
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={m2MacImage} alt="Sample" />
          <CardText>
            M2 Pro MacBook: I’ve always used Macs for development. Currently, my
            company provides an M3 Pro MacBook, which has higher specs than my
            personal MacBook.
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={subMonitorImage} alt="Sample" />
          <CardText>Portable screen: I don't use it much now.</CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={beatsStudioImage} alt="Sample" />
          <CardText>
            Beats Studio: I frequently use them for listening to and creating
            music.
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={airPodsImage} alt="Sample" />
          <CardText>
            AirPods (2nd generation): I bought them in 2019 and have used them
            for many years. They are still in use and very durable.
          </CardText>
        </CardContainer>
      </SubPageContainer>
    </div>
  );
};

export default GearsPage;
