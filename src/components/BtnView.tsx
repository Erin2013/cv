import React from 'react'
import gapi, { TypeGAPI } from '../share/api'

type Props = {}

class BtnView extends React.PureComponent<Props, TypeGAPI> {
  state = {
    urlPDF: 'https://goo.gl/i2J6zD',
  }

  componentDidMount() {
    gapi().then(d => {
      this.setState(d)
    })
  }

  render() {
    const { urlPDF } = this.state

    return (
      <a
        className={`btn`}
        href={urlPDF}
        target="_new"
        style={{
          color: '#1484a1',
          borderColor: '#1484a1',
        }}
      >
        View All
      </a>
    )
  }
}
export default BtnView
