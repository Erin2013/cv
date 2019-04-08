import React, { useEffect, useState } from 'react'
import gapi from '../share/api'

type Props = {}

const BtnView: React.FunctionComponent<Props> = () => {
  const [urlPDF, setState] = useState('https://goo.gl/i2J6zD')

  useEffect(() => {
    gapi().then(d => {
      setState(d.urlPDF)
    })
  }, [])

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

export default BtnView
