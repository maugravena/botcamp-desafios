import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MessageBotcamp from '../MessageBotcamp'

import robot from '../../img/robot.png'

function MessageRobot({ children }) {
  return (
    <Container>
      <Icon />
      <Message>{children}</Message>
    </Container>
  )
}

MessageRobot.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
}

const Container = styled.div`
  display: flex;
  float: left;
  width: 100%;
  margin-top: 20px;
`

const Icon = styled.span`
  width: 40px;
  height: 40px;
  background-color: #26265e;
  background-image: url(${robot});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  display: block;
  margin-right: 16px;
`

const Message = styled(MessageBotcamp)`
  color: #333;
  border: solid 1px #d7d7ea;
  border-radius: 0px 18px 18px 18px;
  background-color: rgba(255, 255, 255, 0.83);
  margin-top: 0;
`

export default MessageRobot
