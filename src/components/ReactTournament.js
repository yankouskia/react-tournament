import React from 'react';
import PropTypes from 'prop-types';
import { Table } from './Table/Table';
import { Provider } from './Provider';

export class ReactTournament extends React.PureComponent {
  render() {
    const { aspectRatio, data, theme, width } = this.props;

    return (
      <Provider theme={theme}>
        <Table aspectRatio={aspectRatio} data={data} width={width} />
      </Provider>
    )
  }
};

ReactTournament.propTypes = {
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
  theme: PropTypes.object,
  width: PropTypes.string,
};

ReactTournament.defaultProps = {
  aspectRatio: 2,
  theme: null,
  width: 'auto',
};
