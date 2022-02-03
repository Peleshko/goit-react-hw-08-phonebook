import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <ul className={s.navList}>
      <li className={s.navItem}>
        <NavLink
          to="/"
          exact
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          HomePage
        </NavLink>
      </li>

      {isLoggedIn && (
        <li className={s.navItem}>
          <NavLink
            to="/contacts"
            exact
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Phonebook
          </NavLink>
        </li>
      )}
    </ul>
  );
}
