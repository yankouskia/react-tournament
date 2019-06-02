import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Column,
  Wrapper,
  PairNumber,
  FlexCenterContainer,
  Row,
  PersonNumber,
  Username,
  Score,
} from './styled';

// TODO: implement radius
export function PairBox({
  aspectRatio,
  background,
  radius,
  width,
  pair,
  index,
}) {
  const isFirstWinner = !!pair[0].isWinner;
  const isSecondWinner = !!pair[1].isWinner;
  const hasResult = !isFirstWinner || isSecondWinner;

  return (
    <Wrapper background={background} width={width}>
      <Container aspectRatio={aspectRatio}>
        <Content>
          <Column width={1} >
            <FlexCenterContainer>
              <PairNumber>
                # {index}
              </PairNumber>
            </FlexCenterContainer>
          </Column>
          <Column width={11} >
            <Row width={1} primary={!hasResult} success={isFirstWinner} fail={isSecondWinner}>
              <Column width={1}>
                <FlexCenterContainer>
                  <PersonNumber>
                    #{index * 2 - 1}
                  </PersonNumber>
                </FlexCenterContainer>
              </Column>
              <Column width={6}>
                <FlexCenterContainer>
                  <Username>
                    {pair[0].user} {isFirstWinner && '→'}
                  </Username>
                </FlexCenterContainer>
              </Column>
              <Column width={2}>
                <FlexCenterContainer>
                  <Score>{pair[0].score}</Score>
                </FlexCenterContainer>
              </Column>
            </Row>
            <Row width={1} primary={!hasResult} success={isSecondWinner} fail={isFirstWinner}>
              <Column width={1}>
                <FlexCenterContainer>
                  <PersonNumber>
                    #{index * 2}
                  </PersonNumber>
                </FlexCenterContainer>
              </Column>
              <Column width={6}>
                <FlexCenterContainer>
                  <Username>
                    {pair[1].user} {!isFirstWinner && '→'}
                  </Username>
                </FlexCenterContainer>
              </Column>
              <Column width={2}>
                <FlexCenterContainer>
                  <Score>{pair[1].score}</Score>
                </FlexCenterContainer>
              </Column>
            </Row>
          </Column>
        </Content>
      </Container>
    </Wrapper>
  )
};

PairBox.propTypes = {
  aspectRatio: PropTypes.number,
  background: PropTypes.string,
  index: PropTypes.number.isRequired,
  pair: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
  radius: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PairBox.defaultProps = {
  aspectRatio: 2,
  background: 'teal',
  radius: 2,
  width: 'auto',
};

