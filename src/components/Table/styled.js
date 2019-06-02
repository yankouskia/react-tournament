import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const RoundTitleContainer = styled.div`
  margin: 5px 10px;
  padding: 5px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary.light};
  color: ${({ theme }) => theme.textDark};
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary.dark};
    color: ${({ theme }) => theme.textLight};
    transform: scale(1.1);
  }
`;

export const RoundTitle = styled.span`
  font-size: ${({ theme }) => theme.textLarge};
`;
