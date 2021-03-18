import React, { FC } from 'react'
import s from './modal-box.module.scss'
import clsx from 'clsx'
export interface ModalBoxProps {
  label: string
  active: boolean
}

const ModalBox: FC<ModalBoxProps> = ({ children, label, active }) => {
  return (
    <div className={clsx({ hidden: !active })}>
      <div className={s.modalBox}>
        <div className='text-2xl text-red-700'>{label}</div>
        <div className='flex gap-4 justify-center mt-10'>{children}</div>
      </div>
    </div>
  )
}
export default ModalBox
