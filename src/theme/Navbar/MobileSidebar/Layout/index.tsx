import React from 'react'
import clsx from 'clsx'
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal'
import type { Props } from '@theme/Navbar/MobileSidebar/Layout'
import UserCard from '@site/src/components/UserCard'

import './customstyles.css' // Import a custom stylesheet

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}: Props): JSX.Element {
  const { shown: secondaryMenuShown } = useNavbarSecondaryMenu()
  return (
    <div className="navbar-sidebar custom-navbar-sidebar">
      {' '}
      {header}
      <UserCard isNavbar />
      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        })}
      >
        <div className="navbar-sidebar__item menu custom-primary-menu">{primaryMenu}</div>{' '}
        <div className="navbar-sidebar__item menu custom-secondary-menu">{secondaryMenu}</div>{' '}
      </div>
    </div>
  )
}
