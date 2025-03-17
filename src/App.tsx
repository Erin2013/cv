import React, { useEffect } from 'react'

import styled, { css } from 'styled-components'
import AOS from 'aos'

import Desktop from './components/Desktop'
import Mobile from './components/Mobile'
import GlobalStyles from './GlobalStyles'

const Div = styled.div`
  ${(_p: {}) => css``};
`
type Props = {}

const App: React.FunctionComponent<Props> = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      delay: 100,
    })
  }, [])

  return (
    <Div>
      <GlobalStyles />
      <Desktop />
      <Mobile />
    </Div>
  )
}

export default App
