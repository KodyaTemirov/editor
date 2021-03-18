import React, { FC } from 'react'
import s from './input.module.scss'
import clsx from 'clsx'
export interface ButtonProps {
  label?: string
  className?: string
  onChange?: () => void
  placeholder?: string
}

const Input: FC<ButtonProps> = ({
  label,
  placeholder,
  onChange,
  className
}) => {
  return (
    <input
      className={clsx(s.input, className)}
      onChange={onChange}
      value={label}
      placeholder={placeholder}
    />
  )
}
export default Input
