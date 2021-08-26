/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as N from './styles';

export default function Header() {
  return (
    <>
      <N.Nav>
        <Link to='/'>
          <FaHome size={24} />
        </Link>

        <Link to='/login'>
          <FaUserAlt size={24} />
        </Link>
        <Link to='/home'>
          <FaSignInAlt size={24} />
        </Link>
      </N.Nav>
    </>
  );
}