import React from 'react'
import { SummaryCard, SummaryCardImg, SummaryCardNumber, SummaryCardText } from './style';

function Card({image,Text,Count}) {
  return (
    <SummaryCard>
      <SummaryCardImg src={image} />
      <SummaryCardNumber>{Count}</SummaryCardNumber>
      <SummaryCardText>{Text}</SummaryCardText>
    </SummaryCard>
  );
}

export default Card