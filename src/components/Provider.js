import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { mergeTheme } from '../helpers/theme-helper';

export class Provider extends React.PureComponent {
  render() {
    const { children, theme: custom } = this.props;
    const theme = mergeTheme(custom);

    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    )
  }
};

Provider.propTypes = {
  theme: PropTypes.object,
};

Provider.defaultProps = {
  theme: null,
};
