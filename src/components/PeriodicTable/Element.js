import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  atomicMass: PropTypes.number.isRequired,
  atomicNumber: PropTypes.number.isRequired,
}

const StyledElement = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto auto;
`

const AtomicNumber = styled.span`
  font-size: 10px;
`

const Symbol = styled.span`
  font-size: 14px;
  font-weight: bold;
`

const Name = styled.span`
  font-size: 10px;
`

const AtomicMass = styled.span`
  font-size: 10px;
`

const Element = ({
  name, symbol, atomicNumber, atomicMass,
}) => (
  <StyledElement>
    <AtomicNumber>
      {atomicNumber}
    </AtomicNumber>
    <Symbol>
      {symbol}
    </Symbol>
    <Name>
      {name}
    </Name>
    <AtomicMass>
      {atomicMass}
    </AtomicMass>
  </StyledElement>
)

Element.propTypes = propTypes

export default Element
