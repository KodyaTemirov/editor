import React, { FC } from 'react'
import s from './button.module.scss'
import clsx from 'clsx'
export interface ButtonProps {
  label: string
  className?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button className={clsx(s.button, className)} onClick={onClick}>
      {label}
    </button>
  )
}
export default Button
