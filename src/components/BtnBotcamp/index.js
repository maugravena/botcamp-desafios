import styled from 'styled-components'

const BtnBotcamp = styled.button.attrs(props => ({ children: props.content }))`
  width: 280px;
  height: 50px;
  border-radius: 25px;
  font-size: 20px;
  color: #ffffff;
  background-color: #ee3e25;
  text-transform: uppercase;
`

export default BtnBotcamp
