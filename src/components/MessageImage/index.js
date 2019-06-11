import styled from 'styled-components'
import MessageBotcamp from '../MessageBotcamp'

const MessageImage = styled(MessageBotcamp)`
  background-image: url(${props => props.img.content});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`

export default MessageImage
