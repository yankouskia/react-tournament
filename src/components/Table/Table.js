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
                <>
                  <PairBox
                    pair={pair}
                    index={i + 1}
                  />
                </>
              ))
            }
          </Column>
        ))
      }
    </Wrapper>
  )
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Table.defaultProps = {
};

