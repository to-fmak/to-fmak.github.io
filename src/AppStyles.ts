import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaSoundcloud } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  flex: 7;
  background-image: url('https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2954734/1e81bdda-13ec-cde5-2b81-4ecb192d9eaa.jpeg');
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fafafa;

  @media (max-width: 768px) {
    height: 50%;
    padding: 1rem;
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
