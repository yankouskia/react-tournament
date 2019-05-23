import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ width }) => typeof +width === 'number' && !Number.isNaN(+width) ? `${+width}px` : width};
  border-radius: ${({ radius }) => typeof +radius === 'number' && !Number.isNaN(+radius) ? `${+radius}px` : radius};
  background: ${({ background }) => background};
`;

const Container = styled.div`
  position: relative;
  padding-bottom: ${({ aspectRatio }) => `${(100 / aspectRatio).toFixed(2)}%`};
  height: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export function PairBox({
  aspectRatio,
  background,
  radius,
  width,
}) {
  return (
    <Wrapper background={background} radius={radius} width={width}>
      <Container aspectRatio={aspectRatio}>
        <Content>
        </Content>
      </Container>
    </Wrapper>
  )
};

PairBox.propTypes = {
  aspectRatio: PropTypes.number,
  background: PropTypes.string,
  radius: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PairBox.defaultProps = {
  aspectRatio: 2,
  background: 'teal',
  radius: 2,
  width: 'auto',
};

