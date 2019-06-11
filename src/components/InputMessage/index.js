import styled from 'styled-components'

const InputMessage = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Diz aí...'
}))`
  width: 100%;
  height: 50px;
  border: none;
  font-size: 20px;
  padding: 14px 11px 14px 16px;
  color: rgba(0, 0, 0, 0.33);
  background-color: #fbfbff;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
`

export default InputMessage
