import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 20;
  background-color: var(--color-header-bg);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: var(--content-width);
  height: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
  box-sizing: border-box;

  @media (max-width: 640px) {
    gap: 0.5rem;
    padding: 0 1rem;
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-decoration: none;

  svg {
    color: var(--color-accent);
    font-size: 1.3rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(-20deg);
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  position: relative;
  color: var(--color-muted);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 2px;
    border-radius: 2px;
    background-color: var(--color-accent);
    transform: scaleX(0);
    transition: transform 0.25s ease;
  }

  &:hover,
  &.active {
    color: var(--color-text);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background-color: var(--color-surface);
  color: var(--color-text);
  font-size: 1.05rem;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
`;

export const LangSwitch = styled.div`
  display: inline-flex;
  padding: 2px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background-color: var(--color-surface);
`;

export const LangOption = styled.button<{ $active: boolean }>`
  padding: 0.3rem 0.55rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ $active }) => ($active ? 'var(--color-accent)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--color-on-accent)' : 'var(--color-muted)')};
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: ${({ $active }) => ($active ? 'var(--color-on-accent)' : 'var(--color-text)')};
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: calc(var(--header-height) + 2.5rem) 1.25rem 2rem;
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: calc(var(--header-height) + 1.5rem) 1rem 1.5rem;
  }
`;

export const Footer = styled.footer`
  padding: 2rem 1rem;
  color: var(--color-muted);
  font-size: 0.85rem;
  text-align: center;
`;
