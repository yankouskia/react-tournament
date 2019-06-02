import React from 'react';
import { mergeTheme } from '../helpers/theme-helper';
import { Table } from './Table/Table';
import { Provider } from './Provider';

export class ReactTournament extends React.PureComponent {
  render() {
    const { data, theme } = this.props;

    return (
      <Provider theme={theme}>
        <Table data={data} />
      </Provider>
    )
  }
};

ReactTournament.propTypes = {
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
};

ReactTournament.defaultProps = {
  theme: null,
};
