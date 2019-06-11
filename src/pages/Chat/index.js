import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderBotcamp from '../../components/HeaderBotcamp'
import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutBotcamp from '../../components/LogoutBotcamp'
import InputMessage from '../../components/InputMessage'
import ChatWrapper from '../../components/ChatWrapper'
import MessagesWrapper from '../../components/MessagesWrapper'
import FormBotcamp from '../../components/FormBotcamp'
import AttachBotcamp from '../../components/AttachBotcamp'
import InputAudio from '../../components/InputAudio'

function readFileAsDataURL(file) {
  return new Promise(resolve => {
    const reader = new FileReader()

    reader.onload = e => {
      resolve(e.target.result)
    }

    reader.readAsDataURL(file)
  })
}

function listenAudio() {
  return new Promise(resolve => {
    /* eslint-disable */
    const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    const SpeechRecognitionEvent =
      SpeechRecognitionEvent || webkitSpeechRecognitionEvent
    /* eslint-enable */

    const colors = ['blue', 'red', 'yellow', 'black', 'white']
    const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
      ' | '
    )} ;`

    const recognition = new SpeechRecognition()
    const speechRecognitionList = new SpeechGrammarList()
    speechRecognitionList.addFromString(grammar, 1)
    recognition.grammars = speechRecognitionList
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.start()

    recognition.onresult = event => {
      const last = event.results.length - 1
      const color = event.results[last][0].transcript

      resolve(color)
    }

    recognition.onspeechend = () => {
      recognition.stop()
    }
  })
}

function Chat() {
  const [listMessages, setListMessages] = useState([])
  const [text, setText] = useState('')
  const [color, setColor] = useState('')

  function handleSubmit(e) {
    if (text === '!nasa') {
      fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => response.json())
        .then(data =>
          setListMessages([
            ...listMessages,
            { id: Date.now(), content: data.url }
          ])
        )
      e.preventDefault()
    }

    const message = {
      id: Date.now(),
      type: 'user',
      content: text
    }

    e.preventDefault()
    setListMessages([...listMessages, message])
    setText('')
  }

  function handleInput(e) {
    setText(e.target.value)
  }

  function handleFileChange(e) {
    const file = e.target.files[0]

    if (file === undefined) return

    readFileAsDataURL(file).then(url =>
      setListMessages([...listMessages, { id: Date.now(), content: url }])
    )
  }

  function handleInputAudio() {
    listenAudio().then(result => setColor(result))
  }

  return (
    <ChatWrapper color={color}>
      <HeaderBotcamp>
        <LogoBotcamp smaller />
        <Link to="/">
          <LogoutBotcamp />
        </Link>
      </HeaderBotcamp>
      <MessagesWrapper messages={listMessages} />
      <FormBotcamp onSubmit={handleSubmit}>
        <InputMessage required value={text} onChange={handleInput} />
        <AttachBotcamp onFile={handleFileChange} />
        <InputAudio onClick={handleInputAudio} />
      </FormBotcamp>
    </ChatWrapper>
  )
}

export default Chat
