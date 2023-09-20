import React from 'react';
import Plane from './bxs-plane-alt.svg';
import Building from './bxs-building-house.svg';
import BadgeDollar from './bxs-badge-dollar.svg'; // Make sure to rename this file
import CreditCard from './bxs-credit-card-front.svg'; // Make sure to rename this file
import NLP from './bxs-nlp.svg'; // Newly added
import MLOps from './bxs-mlops.svg'; // Newly added

const icons = {
  'plane': Plane,
  'building': Building,
  'badge-dollar': BadgeDollar,
  'credit-card': CreditCard,
  'bxs-nlp': NLP,  // Newly added
  'bxs-mlops': MLOps  // Newly added
};

const BoxIcon = ({ iconName, ...props }) => {
  const iconURL = icons[iconName];
  return <img src={iconURL} alt={iconName} {...props} />; // Spread props to allow additional styling
};

export default BoxIcon;

