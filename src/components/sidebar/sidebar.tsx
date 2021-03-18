import React, { FC } from 'react'
import s from './sidebar.module.scss'
export interface SidebarProps {}
const Sidebar: FC<SidebarProps> = ({ children }) => {
  return <section className={s.sidebar}>{children}</section>
}
export default Sidebar
