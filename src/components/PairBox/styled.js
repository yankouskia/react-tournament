import styled from 'styled-components';

export const Wrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px;
  width: 'auto';
  font-size: ${({ theme }) => theme.textMedium};
  color: ${({ theme }) => theme.textDark};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
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
  border: solid 0.01em;
  border-radius: 3px;
  box-sizing: border-box;
  flex-grow: ${({ width = 1 }) => width};
  flex-basis: ${({ width = 1 }) => `${width}%`};
  display: flex;
  flex-direction: column;

  background: ${({ light, primary, success, fail, theme }) => {
    let colorTopic = {};

    if (success) {
      colorTopic = theme.success;
    } else if (fail) {
      colorTopic = theme.fail;
    } else if (primary) {
      colorTopic = theme.primary;
    }

    if (!colorTopic) return 'transparent';
    if (light) return colorTopic.light;
    return colorTopic.default;
  }};
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  border: solid 0.01em;
  border-radius: 3px;
  box-sizing: border-box;
  flex-grow: ${({ width = 1 }) => width};
  flex-basis: ${({ width = 1 }) => `${width}%`};
  display: flex;
  flex-direction: row;

  transition: all 0.3s ease-in-out;

  background: ${({ primary, success, fail, theme }) => {
    if (success) return theme.success.default;
    if (fail) return theme.fail.default;
    if (primary) return theme.primary.default;
    return 'transparent';
  }};

  &:hover {
    border: solid 0.05em;
    background: ${({ primary, success, fail, theme }) => {
      if (success) return theme.success.dark;
      if (fail) return theme.fail.dark;
      if (primary) return theme.primary.dark;
      return 'transparent';
    }};
  };

  &:active {
    border: solid 0.05em;
    background: ${({ primary, success, fail, theme }) => {
      if (success) return theme.success.darkest;
      if (fail) return theme.fail.darkest;
      if (primary) return theme.primary.darkest;
      return 'transparent';
    }};
  };
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
  font-size: ${({ theme }) => theme.textSmall};
`;

export const PersonNumber = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: ${({ theme }) => theme.textSmall};
`;

export const Username = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textDark};
  transform: scale(1.0);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.textLight};
  };
`;

export const Score = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textDark};
  transform: scale(1.0);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.textLight};
  };
`;
