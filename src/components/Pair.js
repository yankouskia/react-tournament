import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Polygon = styled.polygon`
  fill: gray;
  stroke: purple;
  stroke-width: 1;
`;

const Line = styled.line`
  stroke: rgb(255,0,0);
  stroke-width: 2;
`;

export class Pair extends React.PureComponent {
  constructor(props) {
    super(props);

    this.createPoints = this.createPoints.bind(this);
    this.createMidlineProps = this.createMidlineProps.bind(this);
  }

  createPoints() {
    const { height, width } = this.props;

    return [
      0, 0,
      width, 0,
      width, height,
      0, height,
    ];
  }

  createMidlineProps() {
    const { height, width } = this.props;

    return {
      x1: 0,
      x2: width,
      y1: height / 2,
      y2: height / 2,
    };
  }

  createScorelineProps() {
    const { height, width } = this.props;

    return {
      x1: width * 0.8,
      x2: width * 0.8,
      y1: 0,
      y2: height,
    };

  }

  render() {
    const points = this.createPoints();
    const midlineProps = this.createMidlineProps();
    const scorelineProps = this.createScorelineProps();

    return (
      <>
        <Polygon
          points={points}
        />
        <Line
          {...midlineProps}
        />
        <Line
          {...scorelineProps}
        />
      </>
    );
  }
}

Pair.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

Pair.defaultProps = {
  height: 80,
  width: 200,
};
