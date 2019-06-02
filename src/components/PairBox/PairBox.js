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

export function PairBox({
  aspectRatio,
  pair,
  index,
}) {
  const isFirstWinner = !!pair[0].isWinner;
  const isSecondWinner = !!pair[1].isWinner;
  const hasResult = isFirstWinner || isSecondWinner;

  return (
    <Wrapper>
      <Container aspectRatio={aspectRatio}>
        <Content>
          <Column width={0} primary light>
            <FlexCenterContainer>
              <PairNumber>
                # {index}
              </PairNumber>
            </FlexCenterContainer>
          </Column>
          <Column width={15} >
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
                  <Username href={pair[0].userLink} target="_blank">
                    {pair[0].user} {isFirstWinner && '→'}
                  </Username>
                </FlexCenterContainer>
              </Column>
              <Column width={2}>
                <FlexCenterContainer>
                  <Score href={pair[0].scoreLink} target="_blank">
                    {pair[0].score}
                  </Score>
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
                  <Username href={pair[1].userLink} target="_blank">
                    {pair[1].user} {isSecondWinner && '→'}
                  </Username>
                </FlexCenterContainer>
              </Column>
              <Column width={2}>
                <FlexCenterContainer>
                  <Score href={pair[1].scoreLink} target="_blank">
                    {pair[1].score}
                  </Score>
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
  index: PropTypes.number.isRequired,
  pair: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
};

PairBox.defaultProps = {
  aspectRatio: 2,
};

