import * as React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Nav.module.scss';

export type NavLinkProps = {
  linkRef: string;
  linkText: string;
};

export function NavLink({ linkRef, linkText }: NavLinkProps) {
  const router = useRouter();
  return (
    <li>
      <Link href={linkRef}>
        <a
          href={linkRef}
          className={`${styles.sidebarLink} ${
            router.pathname === linkRef && styles.active
          }`}
        >
          {linkText}
        </a>
      </Link>
    </li>
  );
}
