import React from 'react';

export class Svg extends React.PureComponent {
  render() {
    return (
      <svg>{this.props.children}</svg>
    );
  }
}
