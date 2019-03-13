import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { elements, elementPositions } from './elements';
import Element from './Element';

const StyledPeriodicTable = styled.div`
  display: grid;
  grid-template-columns: auto repeat(18, 1fr);
  grid-template-rows: auto repeat(7, 1fr) 24px repeat(2, 1fr);
  padding-left: 1em;
  padding-right: 1em;
`

const periodicColors = {
  'Alkali Metals': '#9fa8da',
  'Noble Gases': '#ffcab1',
  'Alkaline Earth Metals': '#bced09',
  'N/A': '#f9cb40',
  'Pnictogens': '#ff715b',
  'Chalcogens': '#78c0E0',
  'Halogens': '#17bebb',
  'Transition Metals': '#ef709d',
  'Lanthanides': '#bdbbb0',
  'Actinides': '#dbd3ad',
}

const borderTopColumns = ['H', 'Be', 'B', 'C', 'N', 'O', 'F',
  'He', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu',
  'Zn', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb',
  'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu']

const borderLeftColumns = ['H', 'Li', 'Na', 'K', 'Rb', 'Cs',
  'Fr', 'La', 'Ac', 'B', 'He', 'Al', 'Hf', 'Rf']

export default class PeriodicTable extends Component {
  renderElements() {
    return elements.map((element) => {
      const StyledElement = styled.div`
        grid-column: ${elementPositions[element.symbol].column};
        grid-row: ${elementPositions[element.symbol].row};
        background-color: ${periodicColors[element.groupName]};
        border-top: ${borderTopColumns.includes(element.symbol) ? '1px solid #000000' : ''};
        border-left: ${borderLeftColumns.includes(element.symbol) ? '1px solid #000000' : ''};
        border-bottom: 1px solid #000000;
        border-right: 1px solid #000000;
        text-align: center;
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
        justify-self: center;
        margin-bottom: 10px;
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
        align-self: center;
        margin-right: 10px;
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
