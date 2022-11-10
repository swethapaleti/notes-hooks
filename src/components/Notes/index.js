import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  AddNotes,
  Input,
  TextArea,
  Btn,
  Empty,
  Image,
  Text,
  SubText,
  NoteContainer,
} from './styledComponents'

const Notes = () => {
  const [title, addTitle] = useState('')
  const [notes, addNotes] = useState('')
  const [noteList, addList] = useState([])

  const onTitle = event => {
    addTitle(event.target.value)
  }

  const onNotes = event => {
    addNotes(event.target.value)
  }

  const addToList = event => {
    event.preventDefault()
    const newItem = {
      id: uuidv4(),
      title,
      notes,
    }
    addList(prev => [...prev, newItem])
    addTitle('')
    addNotes('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <AddNotes onSubmit={addToList}>
        <Input placeholder="Title" value={title} onChange={onTitle} />
        <TextArea
          placeholder="Take a Note..."
          rows="6"
          cols="20"
          value={notes}
          onChange={onNotes}
        />
        <Btn type="submit">Add</Btn>
      </AddNotes>
      {noteList.length === 0 ? (
        <Empty>
          <Image
            alt="notes empty"
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png "
          />
          <Text>No Notes Yet</Text>
          <SubText>Notes you add will appear here</SubText>
        </Empty>
      ) : (
        <NoteContainer>
          {noteList.map(each => (
            <NoteItem key={each.id} note={each} />
          ))}
        </NoteContainer>
      )}
    </MainContainer>
  )
}

export default Notes
