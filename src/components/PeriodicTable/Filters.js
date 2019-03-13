import PropTypes from 'prop-types';
import React, { Component } from 'react';


export default class Filters extends Component {
  constructor(props) {
    super(props)
  }
 

  render() {
    return (
      <header>
        <div className="group">
          <img className="group__logo" src="https://cdn-assets3.clutchprep.com/assets/logo@2x-37df6c53423a9b4fdc3970fb25aff74162b15b4af62aaf384f48844184ad787a.png"></img>                              
        </div>
        
        <div className="metals">
          <h2>Metals</h2>
          <a href="">Alkali metals</a>
          <a href="">Alkaline earth metals</a>
          <a href="">Lanthanoids</a>
        </div>
        <div className="metals-two">
          <h2></h2>
          <a href="">Actinoids</a>
          <a href="">Transition metals</a>
          <a href="">Post-Transition metals</a>
        </div>
        <div className="metalloids">
          <h2>METALLOIDS</h2>
        </div>
        <div className="non-metals">
          <h2>NON-METALS</h2>
          <a href="">Other nonmetals</a>
          <a href="">Noble gases</a>
        </div>
          <div className="other-classifications">
          <h2>OTHER classNameIFICATIONS</h2>
          <a href="">Pnictogens</a>
          <a href="">Chalcogens</a>
          <a href="">Halogens</a>
        </div>
        <div className="properties">
          <h2>Properties</h2>
          <a href="">Electronegativity</a>
          <a href="">Electron Affinity</a>
          <a href="">Ionization</a>
        </div>
        <div className="properties-2">
          <h2></h2>
          <a href="">Atomic Radius</a>
        </div>
      </header>
    )
  }
}

