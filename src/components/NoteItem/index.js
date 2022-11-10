import {ListItem, Heading, SubText} from './styledComponents'

const NoteItem = props => {
  const {note} = props
  const {title, notes} = note
  return (
    <ListItem>
      <Heading>{title}</Heading>
      <SubText>{notes}</SubText>
    </ListItem>
  )
}

export default NoteItem
