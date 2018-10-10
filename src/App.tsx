import React from 'react'
import { hot } from 'react-hot-loader'
import styled, { css, injectGlobal } from 'styled-components'
import globalCSS from './app.css'
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'

const Div = styled.div`
  ${(_p: {}) => css``};
`

type Props = {}

class App extends React.Component<Props, {}> {
  componentDidMount() {
    injectGlobal`${globalCSS}`

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
        <Desktop />
        <Mobile />
      </Div>
    )
  }
}

export default hot(module)(App)
