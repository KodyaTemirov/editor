import React, { FC } from 'react'

export interface NotSelectedProps {}

const NotSelected: FC<NotSelectedProps> = () => {
  return (
    <span className='flex h-full w-full items-center justify-center text-gray-400 text-2xl'>
      Выберите заметку
    </span>
  )
}
export default NotSelected
