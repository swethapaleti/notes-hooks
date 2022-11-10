import styled from 'styled-components'

export const ListItem = styled.li`
  border: 1px solid #334155;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-right: 10px;
    width: 32%;
  }
`

export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 25px;
`

export const SubText = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
`
