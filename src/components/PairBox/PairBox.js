import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Column,
  Wrapper,
} from './styled';

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
          <Column />
          <Column />
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

