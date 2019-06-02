import React from 'react';
import PropTypes from 'prop-types';
import { PairBox } from '../PairBox/PairBox';
import {
  Wrapper,
  Column,
} from './styled';

export function Table({
  aspectRatio,
  data,
  width,
}) {
  return (
    <Wrapper width={width}>
      {
        data.map((column, index) => (
          <Column key={index}>
            {
              column.map((pair, i) => (
                <PairBox
                  aspectRatio={aspectRatio}
                  key={i}
                  pair={pair}
                  index={i + 1}
                />
              ))
            }
          </Column>
        ))
      }
    </Wrapper>
  )
};

Table.propTypes = {
  aspectRatio: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.shape({
        isWinner: PropTypes.bool,
        user: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
      })),
    ),
  ).isRequired,
  width: PropTypes.string,
};

Table.defaultProps = {
  aspectRatio: 2,
  width: 'auto',
};
