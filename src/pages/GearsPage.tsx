import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HamburgerMenuContainer,
  DropdownMenu,
  MenuItem,
} from "../styles/AppStyles";
import {
  CardContainer,
  CardImage,
  CardText,
  GearsPageContainer,
} from "../styles/GearsPageStyles";
import { FaBars } from "react-icons/fa";
import keyboardsImage from "../assets/images/gears/keyboards.jpg";
import iphoneImage from "../assets/images/gears/iphone15.jpg";
import m2MacImage from "../assets/images/gears/m2-macbook-pro.jpg";
import subMonitorImage from "../assets/images/gears/sub-monitor.jpg";
import beatsStudioImage from "../assets/images/gears/beats-studio.jpg";

const GearsPage: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div>
      <HamburgerMenuContainer>
        <FaBars onClick={toggleMenu} />
        {menuOpen && (
          <DropdownMenu>
            <MenuItem onClick={() => handleMenuItemClick("/")}>Home</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/gears")}>
              Gears
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/pets")}>
              Pets
            </MenuItem>
          </DropdownMenu>
        )}
      </HamburgerMenuContainer>

      <GearsPageContainer>
        <CardContainer>
          <CardImage src={iphoneImage} alt="Sample" />
          <CardText>
            iPhone: I've been an Apple user for over 10 years and am currently
            using the iPhone 15 Pro Max.
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
      </GearsPageContainer>
    </div>
  );
};

export default GearsPage;
