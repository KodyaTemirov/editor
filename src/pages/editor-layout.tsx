import { Sidebar } from '../components/sidebar'
import { Header } from '../components/header'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { NoteCard } from '../components/note-card'

import { FC } from 'react'
interface Notes {
  id: string
  title: string
  date: string
  text: string
}
export interface EditorProps {
  notes?: Notes[]
}

const Editor: FC<EditorProps> = ({ notes }) => {
  return (
    <div className='flex w-full'>
      <Sidebar>
        <Input placeholder='Поиск' className='w-full' />
        <ul className='flex gap-4 flex-col'>
          {notes?.map(({ title, date, id }) => {
            return <NoteCard title={title} date={date} id={id} />
          })}
        </ul>
      </Sidebar>
      <div className='w-full'>
        <Header>
          <h4>File name</h4>
          <div className='flex gap-4'>
            <Button
              label='Редактировать'
              className='bg-blue-700 hover:bg-blue-600'
            />
            <Button label='Удалить' className='bg-red-700 hover:bg-red-600' />
          </div>
        </Header>
      </div>
    </div>
  )
}
Editor.defaultProps = {
  notes: [
    {
      id: '1',
      title: 'О Канте',
      date: '18.03.2021',
      text:
        'Канте - лучший игрок матча по мнению фанатов «Челси»! У нас в телеге тоже практически единогласно 😎'
    },
    {
      id: '2',
      title: 'Диего Симеоне',
      date: '18.03.2021',
      text:
        'Диего Симеоне украл схему прессинга под «Челси» у Оле-Гуннара Сульшера. У «МЮ» она работала лучше.        А «Челси» организовал 4 удара после контратак против «Атлетико». За все матчи ЛЧ до вчерашнего у «Челси» набралось только 3. '
    }
  ]
}
export default Editor
