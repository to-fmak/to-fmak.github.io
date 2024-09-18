import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 300px;

  @media (min-width: 768px) {
    width: 45%;
    max-width: 400px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  max-height: 250px;
`;

export const CardText = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
  text-align: left;
  white-space: normal;
  overflow-wrap: break-word;
`;

export const SubPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
  box-sizing: border-box;
  white-space: nowrap;
`;
