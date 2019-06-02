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
