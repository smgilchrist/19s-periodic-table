import React, { Component } from 'react';

import './periodic_table.scss'

import { elements } from './elements';
import Element from './Element';
import ExpandedEl from './ExpandedEl';
import Filters from './Filters';

export default class PeriodicTable extends Component {
  constructor(props) {
    super(props)

    this.state = { highlightedEl: null }
  }

  handleElMouseEnter = (el) => {
    this.setState({
      highlightedEl: el,
    })
  }

  handleElMouseLeave = (el) => {
    this.setState({
      highlightedEl: null,
    })
  }

  renderElements() {
    return elements.map((element) => {
      const { name, symbol, atomicNumber, atomicMass, groupName } = element

      return (
        <Element
          key={symbol}
          className={`PeriodicTable__element ${element.symbol}`}
          name={name}
          symbol={symbol}
          atomicNumber={atomicNumber}
          atomicMass={atomicMass}
          groupName={groupName}
          passMouseEnter={this.handleElMouseEnter}
          passMouseLeave={this.handleElMouseLeave}
        />
      )
    })
  }

  handleColMouseEnter = (colNum) => () => {
    console.log('colNum: ', colNum)
  }

  renderTopNumbers() {
    return [...Array(18)].map((_, index) => {
      const colNum = index + 1

      return (
        <div
          key={`col${colNum}`}
          className="PeriodicTable__top_numbers"
          onMouseEnter={this.handleColMouseEnter(colNum)}
          onMouseLeave={this.handleMouseLeave}
          style={{ gridColumn: (colNum + 1) }}
        >
          {colNum}
        </div>
      )
    })
  }

  handleRowMouseEnter = (rowNum) => () => {
    console.log('rowNum: ', rowNum)
  }

  handleMouseLeave = () => {
    console.log('handle mouse leave')
  }

  renderSideNumbers() {
    return [...Array(7)].map((_, index) => {
      const rowNum = index + 1

      return (
        <div
          key={`row${rowNum}`}
          className="PeriodicTable__side_numbers"
          onMouseEnter={this.handleRowMouseEnter(rowNum)}
          onMouseLeave={this.handleMouseLeave}
          style={{ gridRow: (rowNum + 1) }}
        >
          {rowNum}
        </div>
      )
    })
  }

  renderLanthanidesBlock() {
    return (
      <div className="PeriodicTable__lanthanides_block">
        <span className="PeriodicTable__lanthanides_block__numbers">
          57-71
        </span>
        <span className="PeriodicTable__lanthanides_block__name">
        Lanthanides
        </span>
      </div>
    )
  }

  renderActinidesBlock() {
    return (
      <div className="PeriodicTable__actinides_block">
        <span className="PeriodicTable__actinides_block__numbers">
          89-103
        </span>
        <span className="PeriodicTable__actinides_block__name">
          Actinides
        </span>
      </div>
    )
  }

  renderExpandedEl() {
    return (
      <ExpandedEl
        element={elements.find(el => el.symbol === this.state.highlightedEl)}
      />
    )
  }

  renderFilters() {
    return (
      <Filters 
      />
    )
  }

  render() {
    return (
      <div className="fullTable">
        {this.renderFilters()}      
        <div className="PeriodicTable">        
          {this.renderTopNumbers()}
          {this.renderSideNumbers()}
          {this.renderExpandedEl()}
          {this.renderLanthanidesBlock()}
          {this.renderActinidesBlock()}
          {this.renderElements()}
        </div>
      </div>
    );
  }
}
