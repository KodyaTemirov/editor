import EditorLayout from './pages/editor-layout'
function App () {
  const list = [
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
  return <EditorLayout notes={list} />
}

export default App
