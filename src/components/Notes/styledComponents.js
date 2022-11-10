import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
`

export const AddNotes = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 5px 15px #d8d8d8;
  width: 90%;
`

export const Input = styled.input`
  border: 0px;
  margin-bottom: 20px;
  outline: none;
`

export const TextArea = styled.textarea`
  border: 0px;
  margin-bottom: 20px;
  outline: none;
`

export const Btn = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  border-radius: 8px;
  height: 50px;
  width: 80px;
  color: white;
  border-width: 0px;
`

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const Image = styled.img`
  width: 100px;
`

export const Text = styled.h1`
  color: #475569;
  font-size: 26px;
  font-weight: 600;
`

export const SubText = styled.p`
  color: #334155;
  font-size: 17px;
  font-weight: 400;
`

export const NoteContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
  margin-top: 20px;
  width: 90%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
