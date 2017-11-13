import s from './app.scss'
import Desktop from './desktop'
import Mobile from './mobile'

const App = {
  name: 'App',
  render(h) {
    return (
      <div id="app">
        <Desktop />
        <Mobile />
      </div>
    )
  }
}

export default App
