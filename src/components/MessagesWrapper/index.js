import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import MessageBotcamp from '../MessageBotcamp'
import MessageRobot from '../MessageRobot'
import MessageImage from '../MessageImage'

const Container = styled.section`
  height: 100%;
  padding: 0 16px;
  overflow-y: scroll;
`

function MessagesWrapper({ messages }) {
  return (
    <Container>
      <MessageRobot>
        Olá, tudo bem?
        <br />
        No botão de audio vc pode falar a cor de fundo do chat ex: black, red,
        yellow, white, blue
      </MessageRobot>
      <MessageRobot>
        Com o comando !nasa vou trazer a Foto espacial do dia para vc
      </MessageRobot>
      {messages.map(
        message => {
          if (!message.type || message === '!nasa') {
            return <MessageImage key={message.id} img={message} />
          }
          return (
            <MessageBotcamp key={message.id}>{message.content}</MessageBotcamp>
          )
        }
        // message.type ? (
        //   <MessageBotcamp key={message.id}>{message.content}</MessageBotcamp>
        // ) : (
        //   <MessageImage key={message.id} img={message} />
        // )
      )}
    </Container>
  )
}

MessagesWrapper.defaultProps = {
  messages: []
}

MessagesWrapper.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
}

export default MessagesWrapper
