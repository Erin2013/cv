import React from 'react'
import styled, { css } from 'styled-components'

const Div = styled.div`
  ${(_p: {}) => css``};
`
type Props = {
  from: string
  to: string
  size?: number
}

const ExpPeriod: React.FunctionComponent<Props> = ({ from, to }) => {
  return (
    <Div className={`period`}>
      <p className={`from`}>{from}</p>
      <p className={`to`}>{to}</p>
    </Div>
  )
}
export default ExpPeriod
