import styled, { keyframes } from 'styled-components';
import localImage from '../assets/images/home/me.jpg';

const kenBurns = keyframes`
  from {
    background-size: 112%;
    background-position: 55% center;
  }
  to {
    background-size: 100%;
    background-position: center;
  }
`;

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  animation: ${kenBurns} 9s ease forwards;

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
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s ease forwards;
  animation-delay: 0.1s;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s ease forwards;
  animation-delay: 0.3s;

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
  display: inline-block;
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s ease forwards;
  animation-delay: 0.5s;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #7cb342;
    transform: scale(1.05);
    box-shadow: 0 4px 14px rgba(139, 195, 74, 0.45);
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
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s ease forwards;
  animation-delay: 0.7s;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s ease forwards;
  animation-delay: 0.9s;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding-bottom: 25px;
  }
`;

export const IconLink = styled.a`
  color: #333;
  font-size: 2rem;
  transition: color 0.3s, transform 0.25s;

  &:hover {
    color: #8bc34a;
    transform: translateY(-4px) scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
