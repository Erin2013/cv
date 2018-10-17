import React from 'react'
import { hot } from 'react-hot-loader'
import styled, { css } from 'styled-components'
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'
import GlobalStyles from './GlobalStyles'

const Div = styled.div`
  ${(_p: {}) => css``};
`
type Props = {}

@hot(module)
class App extends React.Component<Props, {}> {
  componentDidMount() {
    setTimeout(() => {
      ;(window as any).AOS.init({
        duration: 1200,
        offset: 200,
        delay: 100,
      })
    }, 500)
  }

  render() {
    return (
      <Div>
        <GlobalStyles />
        <Desktop />
        <Mobile />
      </Div>
    )
  }
}

export default App
