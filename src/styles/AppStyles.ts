import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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

const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 0.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.25rem;
    text-align: center;
  }
`;

export const Avatar = styled.img`
  flex-shrink: 0;
  width: 136px;
  height: 136px;
  border-radius: 50%;
  border: 4px solid var(--color-surface);
  box-shadow: 0 0 0 2px var(--color-accent), 0 12px 32px var(--color-accent-soft);
  object-fit: cover;
  object-position: center 30%;
  opacity: 0;
  animation: ${popIn} 0.6s ease forwards;
`;

export const Name = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: 2.75rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s ease forwards;
  animation-delay: 0.1s;

  @media (max-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const Title = styled.p`
  margin: 0.375rem 0 1.25rem;
  color: var(--color-accent);
  font-size: 1.1rem;
  font-weight: 600;
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s ease forwards;
  animation-delay: 0.2s;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border-radius: 10px;
  background-color: var(--color-accent);
  color: var(--color-on-accent);
  font-weight: 600;
  text-decoration: none;
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s ease forwards;
  animation-delay: 0.3s;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px var(--color-accent-soft);
  }
`;

export const Section = styled.section<{ $delay: number }>`
  margin-top: 3rem;
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s ease forwards;
  animation-delay: ${({ $delay }) => $delay}s;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  letter-spacing: -0.01em;

  &::after {
    content: '';
    display: block;
    width: 2rem;
    height: 3px;
    margin-top: 0.35rem;
    border-radius: 3px;
    background-color: var(--color-accent);
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.85;
`;

export const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background-color: var(--color-surface);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }
`;

export const ExploreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ExploreImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const ExploreTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;

  svg {
    color: var(--color-accent);
    transition: transform 0.25s ease;
  }
`;

export const ExploreCard = styled(Link)`
  display: block;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background-color: var(--color-surface);
  box-shadow: var(--shadow-card);
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
  }

  &:hover ${ExploreImage} {
    transform: scale(1.04);
  }

  &:hover ${ExploreTitle} svg {
    transform: translateX(4px);
  }
`;

export const ExploreBody = styled.div`
  padding: 0.9rem 1rem 1rem;
`;

export const ExploreText = styled.p`
  margin: 0.25rem 0 0;
  color: var(--color-muted);
  font-size: 0.9rem;
`;
