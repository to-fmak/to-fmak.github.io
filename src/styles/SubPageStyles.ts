import styled from 'styled-components';

export const PageHeader = styled.header`
  margin-bottom: 2rem;
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: 2.25rem;
  letter-spacing: -0.03em;
`;

export const PageIntro = styled.p`
  margin: 0.5rem 0 0;
  color: var(--color-muted);
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const CardContainer = styled.figure`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background-color: var(--color-surface);
  box-shadow: var(--shadow-card);
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &:hover ${CardImage} {
    transform: scale(1.04);
  }
`;

export const CardText = styled.figcaption`
  padding: 0.9rem 1rem 1.1rem;
  font-size: 0.95rem;
  line-height: 1.7;
`;
