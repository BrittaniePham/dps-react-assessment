import styled from 'styled-components';
import { Card } from 'semantic-ui-react';


export const StyledCard = styled(Card)`
  height: 500px;
`

export const Truncated = styled(Card.Description)`
  
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: lightgray;
`