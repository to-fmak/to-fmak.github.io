import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaInstagram, FaSoundcloud } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { SiQiita, SiZenn } from 'react-icons/si';
import {
  Hero,
  Avatar,
  Name,
  Title,
  Button,
  Section,
  SectionTitle,
  Description,
  SocialList,
  SocialLink,
  ExploreGrid,
  ExploreCard,
  ExploreImage,
  ExploreBody,
  ExploreTitle,
  ExploreText,
} from '../styles/AppStyles';
import meImage from '../assets/images/home/me.jpg';
import gearsCoverImage from '../assets/images/gears/setup2026.jpg';
import guitarsCoverImage from '../assets/images/guitars/00.jpg';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/to-fmak', icon: <FaGithub /> },
  { label: 'Qiita', href: 'https://qiita.com/to-fmak', icon: <SiQiita /> },
  { label: 'Zenn', href: 'https://zenn.dev/to_fmak', icon: <SiZenn /> },
  { label: 'Instagram', href: 'https://www.instagram.com/fmak_t?igsh=dmdtbHV3dDQ1NDUy&utm_source=qr', icon: <FaInstagram /> },
  { label: 'SoundCloud', href: 'https://soundcloud.com/eojpr45qbooo', icon: <FaSoundcloud /> },
];

const exploreLinks = [
  { path: '/gears', label: 'nav.gears', text: 'gears.intro', image: gearsCoverImage },
  { path: '/guitars', label: 'nav.guitars', text: 'guitars.intro', image: guitarsCoverImage },
];

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero>
        <Avatar src={meImage} alt="Wenzhang" />
        <div>
          <Name>Wenzhang</Name>
          <Title>{t('home.title')}</Title>
          <Button href="https://github.com/to-fmak" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            {t('home.viewGithub')}
          </Button>
        </div>
      </Hero>

      <Section $delay={0.35}>
        <SectionTitle>{t('home.aboutHeading')}</SectionTitle>
        <Description>{t('home.description')}</Description>
      </Section>

      <Section $delay={0.5}>
        <SectionTitle>{t('home.onTheWebHeading')}</SectionTitle>
        <SocialList>
          {socialLinks.map(({ label, href, icon }) => (
            <li key={label}>
              <SocialLink href={href} target="_blank" rel="noopener noreferrer">
                {icon}
                {label}
              </SocialLink>
            </li>
          ))}
        </SocialList>
      </Section>

      <Section $delay={0.65}>
        <SectionTitle>{t('home.exploreHeading')}</SectionTitle>
        <ExploreGrid>
          {exploreLinks.map(({ path, label, text, image }) => (
            <ExploreCard key={path} to={path}>
              <ExploreImage src={image} alt="" />
              <ExploreBody>
                <ExploreTitle>
                  {t(label)}
                  <FiArrowRight />
                </ExploreTitle>
                <ExploreText>{t(text)}</ExploreText>
              </ExploreBody>
            </ExploreCard>
          ))}
        </ExploreGrid>
      </Section>
    </>
  );
};

export default HomePage;
