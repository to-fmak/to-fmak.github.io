import React from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Container, LeftPanel, RightPanel, Name, Title, Button, Description, SocialIcons, IconLink, LanguageSwitcher } from './AppStyles';
import { FaTwitter, FaInstagram, FaSoundcloud } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/en" element={<Home language="en" />} />
        <Route path="/zh" element={<Home language="zh" />} />
        <Route path="*" element={<Home language="en" />} /> {/* 默认重定向到英文版本 */}
      </Routes>
    </Router>
  );
};

interface HomeProps {
  language: string;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const navigate = useNavigate();

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    navigate(`/${newLanguage}`); // 切换到另一种语言的路径
  };

  return (
    <Container>
      <LanguageSwitcher>
        <button onClick={handleLanguageSwitch}>
          {language === 'en' ? 'EN / 中' : '中 / EN'}
        </button>
      </LanguageSwitcher>
      <LeftPanel />
      <RightPanel>
        <div>
          <Name>Wenzhang</Name>
          <Title>Software Engineer</Title>
          <Button href="https://github.com/to-fmak" target="_blank" rel="noopener noreferrer">
            View GitHub
          </Button>
          <Description>
            {language === 'en'
              ? "Hi, I'm Wenzhang, a Cloud Platform Engineer and Full Stack Developer based in Japan.\nI’m also a passionate guitarist and DTM enthusiast.\nTo learn more about my work experience, feel free to visit my GitHub.\nDon't hesitate to reach out to me through any of the following platforms."
              : "你好，我是Wenzhang，一位云平台工程师和全栈开发者，居住在日本。\n我同样是一名充满激情的吉他手和DTM的爱好者。\n想了解更多关于我的工作经历，请访问我的 GitHub。\n欢迎通过以下平台与我联系。"}
          </Description>
        </div>
        <SocialIcons>
          <IconLink href="https://x.com/to__fmak" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </IconLink>
          <IconLink href="https://qiita.com/to-fmak" target="_blank" rel="noopener noreferrer">
            <SiQiita />
          </IconLink>
          <IconLink href="https://www.instagram.com/fmak_t?igsh=dmdtbHV3dDQ1NDUy&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </IconLink>
          <IconLink href="https://soundcloud.com/eojpr45qbooo" target="_blank" rel="noopener noreferrer">
            <FaSoundcloud />
          </IconLink>
        </SocialIcons>
      </RightPanel>
    </Container>
  );
};

export default App;
