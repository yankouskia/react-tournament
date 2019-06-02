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
        userLink: PropTypes.string,
        score: PropTypes.number.isRequired,
        scoreLink: PropTypes.string,
      })),
    ),
  ).isRequired,
  theme: PropTypes.shape({
    primary: PropTypes.shape({
      default: PropTypes.string,
      dark: PropTypes.string,
      darkest: PropTypes.string,
      light: PropTypes.string,
    }),
    success: PropTypes.shape({
      default: PropTypes.string,
      dark: PropTypes.string,
      darkest: PropTypes.string,
      light: PropTypes.string,
    }),
    fail: PropTypes.shape({
      default: PropTypes.string,
      dark: PropTypes.string,
      darkest: PropTypes.string,
      light: PropTypes.string,
    }),
    textSmall: PropTypes.string,
    textMedium: PropTypes.string,
    textLarge: PropTypes.string,

    textDark: PropTypes.string,
    textLight: PropTypes.string,
  }),
  width: PropTypes.string,
};

ReactTournament.defaultProps = {
  aspectRatio: 2,
  theme: null,
  width: 'auto',
};
