import React from 'react';
import { FaTimes, FaPencilAlt, FaRegCircle } from 'react-icons/fa';

const Icon = ({ item }) => {
  switch (item) {
    case 'cross':
      return <FaTimes className='icon' />;
    case 'circle':
      return <FaRegCircle className='icon' />;
    default:
      return <FaPencilAlt className='icon' />;
  }
};

export default Icon;
