import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { elements, elementPositions } from './elements';
import Element from './Element';

const StyledPeriodicTable = styled.div`
  display: grid;
  grid-template-columns: auto repeat(18, 1fr);
  grid-template-rows: auto repeat(7, 1fr) 24px repeat(2, 1fr);
  grid-row-gap: 10px;
`

export default class PeriodicTable extends Component {
  renderElements() {
    return elements.map((element) => {
      const StyledElement = styled.div`
        grid-column: ${elementPositions[element.symbol].column};
        grid-row: ${elementPositions[element.symbol].row};
      `

      const { name, symbol, atomicNumber, atomicMass } = element

      return (
        <StyledElement key={symbol}>
          <Element
            name={name}
            symbol={symbol}
            atomicNumber={atomicNumber}
            atomicMass={atomicMass}
          />
        </StyledElement>
      )
    })
  }

  renderTopNumbers() {
    return [...Array(18)].map((_, index) => {
      const StyledNumber = styled.div`
        grid-column: ${index + 2};
        grid-row: 1;
      `

      return (
        <StyledNumber>
          {index + 1}
        </StyledNumber>
      )
    })
  }

  renderSideNumbers() {
    return [...Array(7)].map((_, index) => {
      const StyledNumber = styled.div`
        grid-column: 1;
        grid-row: ${index + 2};
      `

      return (
        <StyledNumber>
          {index + 1}
        </StyledNumber>
      )
    })
  }

  render() {
    return (
      <StyledPeriodicTable>
        {this.renderTopNumbers()}
        {this.renderSideNumbers()}
        {this.renderElements()}
      </StyledPeriodicTable>
    );
  }
}
