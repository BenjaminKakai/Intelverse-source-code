import React from 'react';
import Plane from './bxs-plane-alt.svg';
import Building from './bxs-building-house.svg';
import BadgeDollar from './bxs-badge-dollar.svg'; // Make sure to rename this file
import CreditCard from './bxs-credit-card-front.svg'; // Make sure to rename this file

const icons = {
  'plane': Plane,
  'building': Building,
  'badge-dollar': BadgeDollar,
  'credit-card': CreditCard
};

const BoxIcon = ({ iconName }) => {
  const iconURL = icons[iconName];
  return <img src={iconURL} alt={iconName} style={{ width: '50px', height: '50px' }} />; // Set the size here
};

export default BoxIcon;

