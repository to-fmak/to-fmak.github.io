import React from "react";
import HamburgerMenuContainer from "../components/HamburgerMenuContainer";
import loveVideo from "../assets/videos/love.mp4";
import { SubPageContainer, StyledVideo, Title } from "../styles/VideoPageStyles";

const VideoPage: React.FC = () => {
  return (
    <div>
      <HamburgerMenuContainer />
      <SubPageContainer>
        <Title>Meine geliebte Minori-chan♡</Title>
        <StyledVideo controls>
          <source src={loveVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      </SubPageContainer>
    </div>
  );
};

export default VideoPage;
