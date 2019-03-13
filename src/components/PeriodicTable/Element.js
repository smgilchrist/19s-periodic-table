import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  atomicMass: PropTypes.number.isRequired,
  atomicNumber: PropTypes.number.isRequired,
  passMouseEnter: PropTypes.func.isRequired,
  passMouseLeave: PropTypes.func.isRequired,
}

export default class Element extends Component {
  constructor(props) {
    super(props)

    this.state = { highlightedEl: null }
  }

  handleElMouseEnter = (el) => () => {
    this.props.passMouseEnter(el)
  }

  handleElMouseLeave = (el) => () => {
    this.props.passMouseLeave(el)
  }

  render() {
    return (
      <div
        className={`PeriodicTable__element ${this.props.symbol} ${this.props.groupName.toLowerCase().replace(/\//g, '-').replace(/ /g, '-')}`}
        onMouseEnter={this.handleElMouseEnter(this.props.symbol)}
        onMouseLeave={this.handleElMouseLeave(this.props.symbol)}
      >
        <span className="PeriodicTable__element__atomic_number">
          {this.props.atomicNumber}
        </span>
        <span className="PeriodicTable__element__symbol">
          {this.props.symbol}
        </span>
        <span className="PeriodicTable__element__name">
          {this.props.name}
        </span>
        <span className="PeriodicTable__element__atomic_mass">
        {this.props.atomicMass}
        </span>
      </div>
    )
  }
}

Element.propTypes = propTypes
