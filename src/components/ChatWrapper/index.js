import styled from 'styled-components'

const ChatWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 375px;
  height: 100vh;
  background-color: ${props => props.color || '#eaeafd'};
  margin: 0 auto;
  box-shadow: 0px 0px 105px 0px rgba(32, 30, 30);
`

export default ChatWrapper
