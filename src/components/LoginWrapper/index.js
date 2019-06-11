import styled from 'styled-components'

import background from '../../img/ecossistema-background.png'

const LoginWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${background});
  max-width: 375px;
  height: 100vh;
  padding: 120px 0 80px 0;
  margin: 0 auto;
  box-shadow: 0px 0px 105px 0px rgba(32, 30, 30);
  border: 15px solid white;
`

export default LoginWrapper
