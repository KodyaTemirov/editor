import React, { FC } from 'react'
import s from './header.module.scss'
export interface HeaderProps {}
const Header: FC<HeaderProps> = ({ children }) => {
  return <header className={s.header}>{children}</header>
}
export default Header
