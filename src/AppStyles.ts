import styled from 'styled-components';
import localImage from './assets/images/me.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  color: #333;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  flex: 7;
  background-image: url(${localImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 50%;
  }
`;

export const RightPanel = styled.div`
  flex: 3;
  padding: 2rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fafafa;
  position: relative;

  @media (max-width: 768px) {
    height: 50%;
    padding: 1rem;
    padding-bottom: 4rem;
  }
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.a`
  background-color: #8bc34a;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 2rem;

  &:hover {
    background-color: #7cb342;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-top: 5rem;
  margin-bottom: 3rem;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding-bottom: 25px;
  }
`;

export const IconLink = styled.a`
  color: #333;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #8bc34a;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const LanguageSwitcher = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  font-size: 1rem;
  color: #333;
  background-color: transparent;
  z-index: 10;

  button {
    background: none;
    border: 2px solid #333;
    border-radius: 4px;
    font-size: 1rem;
    color: #333;
    cursor: pointer;
    padding: 0.5rem;
    transition: color 0.3s;

    &:hover {
      color: #8bc34a;
    }
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 0.9rem;
  }
`;
