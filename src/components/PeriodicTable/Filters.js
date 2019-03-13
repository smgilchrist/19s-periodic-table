import PropTypes from 'prop-types';
import React, { Component } from 'react';


export default class Filters extends Component {
  constructor(props) {
    super(props)
  }
 

  render() {
    return (
      <header>
        <div class="group">
          <h2>Group</h2>
          <div class="group-row">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">7</a>
            <a href="">8</a>
            <a href="">9</a>
            <a href="">10</a>
            <a href="">11</a>
            <a href="">12</a>
            <a href="">13</a>
            <a href="">14</a>
            <a href="">15</a>
            <a href="">16</a>
            <a href="">17</a>
            <a href="">18</a>
          </div>
        </div>
        
        <div class="metals">
          <h2>Metals</h2>
          <a href="">Alkali metals</a>
          <a href="">Alkaline earth metals</a>
          <a href="">Lanthanoids</a>
        </div>
        <div class="metals-two">
          <h2></h2>
          <a href="">Actinoids</a>
          <a href="">Transition metals</a>
          <a href="">Post-Transition metals</a>
        </div>
        <div class="metalloids">
          <h2>METALLOIDS</h2>
        </div>
        <div class="non-metals">
          <h2>NON-METALS</h2>
          <a href="">Other nonmetals</a>
          <a href="">Noble gases</a>
        </div>
          <div class="other-classifications">
          <h2>OTHER CLASSIFICATIONS</h2>
          <a href="">Pnictogens</a>
          <a href="">Chalcogens</a>
          <a href="">Halogens</a>
        </div>
        <div class="properties">
          <h2>Properties</h2>
          <a href="">Electronegativity</a>
          <a href="">Electron Affinity</a>
          <a href="">Ionization</a>
        </div>
        <div class="properties-2">
          <h2></h2>
          <a href="">Atomic Radius</a>
        </div>
      </header>
    )
  }
}

