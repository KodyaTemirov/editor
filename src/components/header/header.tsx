import React, { FC } from 'react'
import s from './header.module.scss'
export interface HeaderProps {
  title?: string
}
const Header: FC<HeaderProps> = ({
  title = 'Заметка не выбрана',
  children
}) => {
  return (
    <header className={s.header}>
      <h4 className={s.title}>{title}</h4>
      <div className={s.right}>{children}</div>
    </header>
  )
}
export default Header
