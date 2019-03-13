import PropTypes from 'prop-types';
import React, { Component } from 'react';

// const propTypes = {
//   name: PropTypes.string.isRequired,
//   symbol: PropTypes.string.isRequired,
//   atomicMass: PropTypes.number.isRequired,
//   atomicNumber: PropTypes.number.isRequired,
// }

const ExpandedEl = ({ element }) => (
  <div className="PeriodicTable__expanded_el">
    <div className={`PeriodicTable__expanded_el__symbol ${element.groupName.toLowerCase().replace(/\//g, '-').replace(/ /g, '-')}`}>
      <div className="PeriodicTable__expanded_el__symbol__header">
        <span className="PeriodicTable__expanded_el__symbol__header__atomic_number">
          {element.atomicNumber}
        </span>
        <span className="PeriodicTable__expanded_el__symbol__header__atomic_mass">
          {element.atomicMass}
        </span>
      </div>
      <div className="PeriodicTable__expanded_el__symbol__symbol">
        {element.symbol}
      </div>
      <div className="PeriodicTable__expanded_el__symbol__name">
        {element.name}
      </div>
      { element.groupName !== 'N/A'
        ? (
          <div className="PeriodicTable__expanded_el__symbol__group">
            {element.groupName.toLowerCase()}
          </div>
        ) : (
          <div className="PeriodicTable__expanded_el__symbol__group" />
        )

      }      
    </div>
    <div className="PeriodicTable__expanded_el__data">
      <div className="PeriodicTable__expanded_el__data__atomic_mass">
        <h2>
        {element.atomicMass}
        </h2>
        <span>
          Atomic Mass
        </span>
      </div>
      <div className="PeriodicTable__expanded_el__data__el-eg">
        <h2>
        {element.electronegativity}
        </h2>
        <span>
        Electronegativity
        </span>
      </div>
      <div className="PeriodicTable__expanded_el__data__io-energy">
        <h2>
          {element.ionizationEnergy}
        </h2>
        <span>
          Ionization energy
        </span>
      </div>
      <div className="PeriodicTable__expanded_el__data__el-affinity">
        <h2>
          {element.electronAffinity}
        </h2>
        <span>
          Electron affinity
        </span>
      </div>
      <div className="PeriodicTable__expanded_el__data__atomic_radius">
        <h2>
          {element.atomicRadius}
        </h2>
        <span>
          Atomic radius
        </span>
      </div>
      <div className="PeriodicTable__expanded_el__data__charges">
        <h2>
          {element.charges}
        </h2>
        <span>
          Charge
        </span>
      </div>
    </div>
  </div>
)

// ExpandedEl.propTypes = propTypes

export default ExpandedEl


