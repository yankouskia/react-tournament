import React from 'react';
import PropTypes from 'prop-types';
import { PairBox } from '../PairBox/PairBox';
import {
  Wrapper,
  Column,
} from './styled';

// TODO: implement radius
export function Table({
  data,
}) {
  return (
    <Wrapper>
      {
        data.map((column, index) => (
          <Column key={index}>
            {
              column.map((pair, i) => (
                <PairBox
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
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.shape({
        isWinner: PropTypes.bool,
        user: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
      })),
    ),
  ).isRequired,
};
