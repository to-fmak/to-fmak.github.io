import React from "react";
import {
  CardContainer,
  CardImage,
  CardText,
  SubPageContainer,
} from "../styles/SubPageStyles";
import HamburgerMenuContainer from "../components/HamburgerMenuContainer";
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
  return (
    <div>
      <HamburgerMenuContainer />
      <SubPageContainer>
        <CardContainer>
          <CardImage src={guitar01} alt="Sample" />
          <CardText>PRS(2024~)</CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={guitar02} alt="Sample" />
          <CardText>Yamaha Mini Guitar(2018~)</CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={guitar03} alt="Sample" />
          <CardText>
            Gibson USA(2018~2023)
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={guitar04} alt="Sample" />
          <CardText>
            Fender Stratocaster Japan(2017~2019)
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={guitar05} alt="Sample" />
          <CardText>
            Fender Telecaster Japan(2016~2017)
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={guitar06} alt="Sample" />
          <CardText>Yeah Man!</CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={guitar07} alt="Sample" />
          <CardText>
            Some Old Stuffs 
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={guitar08} alt="Sample" />
          <CardText>
           Guitar And Watches 
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardImage src={guitar09} alt="Sample" />
          <CardText>
            Kelord And I(2014) I Miss You Bro.
          </CardText>
        </CardContainer>
      </SubPageContainer>
    </div>
  );
};

export default GearsPage;
