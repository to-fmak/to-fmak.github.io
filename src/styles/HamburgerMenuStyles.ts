import styled from 'styled-components';

export const HamburgerMenuContainerWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 20;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    svg {
      font-size: 1.2rem;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 10;
`;

export const MenuItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;
