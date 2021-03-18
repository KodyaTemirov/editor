import React, { FC } from 'react'
import s from './note-card.module.scss'
export interface NoteCardProps {
  id: string
  title: string
  date: string
  onClick?: () => void
}
const NoteCard: FC<NoteCardProps> = ({ id, date, title, onClick }) => {
  return (
    <li className={s.noteCard} key={id} onClick={onClick}>
      <h6 className={s.title}>{title}</h6>
      <span className='text-gray-600 text-sm'>{date}</span>
    </li>
  )
}
export default NoteCard
