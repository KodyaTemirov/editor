import React, { ChangeEvent, FC, useMemo, useState } from 'react'
import { createEditor, Node } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {
  Sidebar,
  Header,
  Button,
  Input,
  NoteCard,
  NotSelected,
  ModalBox
} from '../components'

interface Notes {
  selected: boolean
  id: string
  title: string
  date: string
  text: Node[]
}
export interface EditorLayoutProps {
  notes: Notes[]
}

const EditorLayout: FC<EditorLayoutProps> = ({ notes }) => {
  const [data, setData] = React.useState(notes)
  const [edit, setEdit] = React.useState(true)
  const [modalBox, setModalBox] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

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

  const editHandler = (): void => {
    setEdit(!edit)
  }

  const deleteHandler = (): void => {
    const notes = data.filter(note => note.id !== selectedNote.id)
    setData(notes)
    setModalBox(false)
  }

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    console.log(searchValue)
  }

  const filterNotes = (notes: Notes[]): Notes[] => {
    return data.filter((note: Notes) =>
      note.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  }

  return (
    <div className='flex w-full h-screen fixed'>
      <Sidebar>
        <Input
          placeholder='Поиск'
          className='w-full'
          label={searchValue}
          onChange={onChangeSearch}
        />
        <ul className='flex gap-4 flex-col'>
          {filterNotes(data).map(({ title, date, id }) => {
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

      <section className='w-full h-screen flex-col flex'>
        {selectedNote !== undefined ? (
          <div className='flex flex-col'>
            <Header title={selectedTitle}>
              <Button
                label={edit ? 'Редактировать' : 'Читать'}
                className='bg-blue-700 hover:bg-blue-600'
                onClick={editHandler}
              />
              <Button
                label='Удалить'
                className='bg-red-700 hover:bg-red-600'
                onClick={() => setModalBox(!modalBox)}
              />
            </Header>
            <div className='p-4'>
              <Slate editor={editor} value={value} onChange={onChangeEditor}>
                <Editable readOnly={edit} />
              </Slate>
            </div>
            <ModalBox
              label='Вы точно хотите удалить заметку?'
              active={modalBox}
            >
              <Button
                label='Удалить'
                className='bg-red-700 hover:bg-red-600'
                onClick={deleteHandler}
              />
              <Button
                label='Отменить'
                className='bg-green-700 hover:bg-green-600'
                onClick={() => setModalBox(!modalBox)}
              />
            </ModalBox>
          </div>
        ) : (
          <NotSelected />
        )}
      </section>
    </div>
  )
}
EditorLayout.defaultProps = {}
export default EditorLayout
