import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import attach from '../../img/attach.png'

const FileInput = styled.input.attrs({
  id: 'file-input',
  type: 'file',
  accept: 'image/png, image/jpeg'
})`
  opacity: 0;
  position: absolute;
  pointer-events: none;
  width: 1px;
  height: 1px;
`

const Label = styled.label.attrs({ htmlFor: 'file-input' })`
  position: absolute;
  right: 60px;
  bottom: 5px;
  width: 38px;
  height: 38px;
  background-image: url(${attach});
  cursor: pointer;
`

function AttachBotcamp({ onFile }) {
  return (
    <>
      <FileInput onChange={onFile} />
      <Label />
    </>
  )
}

AttachBotcamp.propTypes = {
  onFile: PropTypes.func.isRequired
}

export default AttachBotcamp
