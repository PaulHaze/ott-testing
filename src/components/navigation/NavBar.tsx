import * as React from 'react';

import { BiChevronsLeft } from 'react-icons/bi';

import { routes } from '@/routes';
import { NavLink } from './NavLink';

import styles from './Nav.module.scss';

export type NavBarProps = {
  showNav: boolean;
  handleNavClick: () => void;
};

export function NavBar({ showNav, handleNavClick }: NavBarProps) {
  const renderRoutes = routes.map((r) => (
    <NavLink key={r.key} linkRef={r.path} linkText={r.label} />
  ));
  return (
    <nav className={styles.sidebarContainer}>
      {/* SHOW HIDE BUTTON */}
      <div className={styles.toggleBtnContainer}>
        <button
          data-testid="sidebar-btn"
          type="button"
          onClick={handleNavClick}
          className={styles.toggleBtn}
        >
          <BiChevronsLeft
            className={`${styles.toggleIcon} ${
              showNav ? 'scale-x-100' : '-scale-x-100'
            }`}
          />
        </button>
      </div>
      {/* ROUTES */}
      <ul
        className={`${styles.linksList} ${
          !showNav ? styles.fadeOut : styles.fadeIn
        }`}
      >
        {renderRoutes}
      </ul>
    </nav>
  );
}
