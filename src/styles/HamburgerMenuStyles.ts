import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HamburgerMenuContainerWrapper = styled.div`
  position: relative;
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

export const DropdownMenu = styled.nav`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  padding: 0.375rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-surface);
  box-shadow: var(--shadow-card);
  animation: ${slideDown} 0.2s ease forwards;
`;

export const MenuItem = styled(NavLink)`
  display: block;
  padding: 0.625rem 0.875rem;
  border-radius: 8px;
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    background-color: var(--color-accent-soft);
  }

  &.active {
    color: var(--color-accent);
    font-weight: 600;
  }
`;
