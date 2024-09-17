import React, { useState } from "react";
import {
  Container,
  LeftPanel,
  RightPanel,
  Name,
  Title,
  Button,
  Description,
  SocialIcons,
  IconLink,
  LanguageSwitcher,
} from "./AppStyles";
import { FaTwitter, FaInstagram, FaSoundcloud } from "react-icons/fa";
import { SiQiita } from "react-icons/si";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  const handleLanguageChange = (lang: "en" | "zh") => {
    setLanguage(lang);
  };

  const content = {
    en: {
      name: "Wenzhang",
      title: "Software Engineer",
      description: `Hi, I'm Wenzhang, a Cloud Platform Engineer and Full Stack Developer based in Japan.
                   I’m also a passionate guitarist and DTM enthusiast. 
                   To learn more about my work experience, feel free to visit my GitHub. 
                   Don't hesitate to reach out to me through any of the following platforms.`,
      githubLink: "https://github.com/to-fmak",
    },
    zh: {
      name: "Wenzhang",
      title: "Software Engineer",
      description: `你好，我是Wenzhang，现居日本的云平台工程师和全栈开发工程师。
                   我还是一名充满激情的吉他手和DTM爱好者。
                   要了解更多我的工作经验，请随时访问我的GitHub。
                   欢迎通过以下平台与我联系。`,
      githubLink: "https://github.com/to-fmak",
    },
  };

  return (
    <Container>
      <LeftPanel />
      <RightPanel>
        <LanguageSwitcher>
          <a
            href="#"
            onClick={() => handleLanguageChange("en")}
            style={{ color: language === "en" ? "#8bc34a" : "#333" }}
          >
            EN
          </a>{" "}
          /
          <a
            href="#"
            onClick={() => handleLanguageChange("zh")}
            style={{ color: language === "zh" ? "#8bc34a" : "#333" }}
          >
            中
          </a>
        </LanguageSwitcher>
        <div>
          <Name>{content[language].name}</Name>
          <Title>{content[language].title}</Title>
          <Button
            href={content[language].githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </Button>
          <Description>{content[language].description}</Description>
        </div>
        <SocialIcons>
          <IconLink
            href="https://x.com/to__fmak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </IconLink>
          <IconLink
            href="https://qiita.com/to-fmak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiQiita />
          </IconLink>
          <IconLink
            href="https://www.instagram.com/fmak_t?igsh=dmdtbHV3dDQ1NDUy&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </IconLink>
          <IconLink
            href="https://soundcloud.com/eojpr45qbooo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSoundcloud />
          </IconLink>
        </SocialIcons>
      </RightPanel>
    </Container>
  );
};

export default App;
