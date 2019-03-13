import PropTypes from 'prop-types';
import React, { Component } from 'react';

// const propTypes = {
//   name: PropTypes.string.isRequired,
//   symbol: PropTypes.string.isRequired,
//   atomicMass: PropTypes.number.isRequired,
//   atomicNumber: PropTypes.number.isRequired,
// }

const ExpandedEl = ({
}) => (
  <div className="PeriodicTable__expanded_el">
    <div className="PeriodicTable__expanded_el__symbol">
      Symbol
    </div>
    <div className="PeriodicTable__expanded_el__data">
      Data
    </div>
  </div>
)

// ExpandedEl.propTypes = propTypes

export default ExpandedEl


