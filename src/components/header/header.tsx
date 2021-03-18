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
      <h4 className='text-gray-800 font-semibold'>{title}</h4>
      {children}
    </header>
  )
}
export default Header
