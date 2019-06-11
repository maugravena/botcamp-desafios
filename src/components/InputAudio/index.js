import styled from 'styled-components'

import mic from '../../img/mic.png'

const InputMessage = styled.div`
  height: 40px;
  width: 40px;
  background-color: #ee3e25;
  background-image: url(${mic});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  position: absolute;
  right: 12px;
  bottom: 5px;
`

export default InputMessage
