import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5px;
  width: ${({ width }) => typeof +width === 'number' && !Number.isNaN(+width) ? `${+width}px` : width};
  /* border-radius: ${({ radius }) => typeof +radius === 'number' && !Number.isNaN(+radius) ? `${+radius}px` : radius}; */
  background: ${({ background }) => background};
`;

export const Container = styled.div`
  position: relative;
  padding-bottom: ${({ aspectRatio }) => `${(100 / aspectRatio).toFixed(2)}%`};
  height: 0;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px;
  box-sizing: border-box;
  flex-grow: ${({ width = 1 }) => width};
  flex-basis: ${({ width = 1 }) => `${width}%`};
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px;
  box-sizing: border-box;
  flex-grow: ${({ width = 1 }) => width};
  flex-basis: ${({ width = 1 }) => `${width}%`};
  display: flex;
  flex-direction: row;
`;

export const FlexCenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PairNumber = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

export const PersonNumber = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

export const Username = styled.a`
`;

export const Score = styled.a``;
