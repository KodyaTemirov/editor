import React, { FC, useMemo, useState } from 'react'
import { createEditor, Node } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {
  Sidebar,
  Header,
  Button,
  Input,
  NoteCard,
  NotSelected
} from '../components'

interface Notes {
  selected: boolean
  id: string
  title: string
  date: string
  text: Node[]
}
export interface EditorLayoutProps {
  notes?: Notes[]
}

const EditorLayout: FC<EditorLayoutProps> = ({ notes }) => {
  const [data, setData] = React.useState(notes)
  const [edit, setEdit] = React.useState(true)

  // Выбор заметки
  const selectNoteHandler = (id: string) => {
    const dataMap = data?.map(
      (item: Notes): Notes => {
        if (item.id === id) {
          return { ...item, selected: true }
        }
        return { ...item, selected: false }
      }
    )
    setData(dataMap)
  }

  const filterSelect = { ...data?.filter(note => note.selected === true) }
  const selectedNote = filterSelect[0]
  const selectedTitle =
    selectedNote?.title === undefined ? undefined : selectedNote.title

  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([])

  React.useEffect(() => {
    const editorValue =
      selectedNote?.text === undefined ? [] : selectedNote.text
    setValue(editorValue)
  }, [data, selectedNote?.text])

  const onChangeEditor = (value: Node[]) => {
    setValue(value)
    const updateValue = data?.map(
      (item: Notes): Notes => {
        console.log(item.text)
        if (item.id === selectedNote.id) {
          return { ...item, text: value }
        }
        return item
      }
    )
    setData(updateValue)
  }

  const editHandler = () => {
    setEdit(!edit)
  }

  return (
    <div className='flex w-full h-screen'>
      <Sidebar>
        <Input placeholder='Поиск' className='w-full' />
        <ul className='flex gap-4 flex-col'>
          {notes?.map(({ title, date, id }) => {
            return (
              <NoteCard
                title={title}
                date={date}
                key={id}
                id={id}
                onClick={() => selectNoteHandler(id)}
              />
            )
          })}
        </ul>
      </Sidebar>
      <section className='w-full h-screen flex-col flex ml-80'>
        {selectedNote !== undefined ? (
          <div className='flex flex-col'>
            <Header title={selectedTitle}>
              <div className='flex gap-4'>
                <Button
                  label={edit ? 'Редактировать' : 'Читать'}
                  className='bg-blue-700 hover:bg-blue-600'
                  onClick={editHandler}
                />
                <Button
                  label='Удалить'
                  className='bg-red-700 hover:bg-red-600'
                />
              </div>
            </Header>
            <div className='p-4'>
              <Slate editor={editor} value={value} onChange={onChangeEditor}>
                <Editable readOnly={edit} />
              </Slate>
            </div>
          </div>
        ) : (
          <NotSelected />
        )}
      </section>
    </div>
  )
}
EditorLayout.defaultProps = {
  notes: [
    {
      selected: false,

      id: '1',
      title: 'О Канте',
      date: '18.03.2021',
      text: [
        {
          type: 'paragraph',
          children: [
            {
              text:
                'Канте - лучший игрок матча по мнению фанатов «Челси»! У нас в телеге тоже практически единогласно 😎'
            }
          ]
        }
      ]
    },
    {
      selected: false,

      id: '2',
      title:
        '«Атлетико» официально объявил о разрыве контракта с  Диего Симеоне',
      date: '18.03.2021',
      text: [
        {
          type: 'paragraph',
          children: [
            {
              text:
                'Это самый высокий показатель за все время сдачи тестов. На второй неделе ноября было 16, на первой неделе декабря 14. В остальные периоды фиксировалось не более 10 новых случаев. '
            }
          ]
        }
      ]
    },
    {
      selected: false,
      id: '3',
      title:
        'Пресс-конференция Рюдигера перед матчем с «Атлетико». Основные вехи:',
      date: '18.03.2021',
      text: [
        {
          type: 'paragraph',
          children: [
            {
              text:
                'С августа 2019 года только у Серхио Агуэро уходило меньше минут на гол (94), чем у Оливье Жиру (105).'
            }
          ]
        }
      ]
    }
  ]
}
export default EditorLayout
