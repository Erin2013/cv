import React from 'react'
import styled, { css } from 'styled-components'
import animeScrollTo from '../share/animeScrollTo'

import cx from '../share/cx'
import {
  BtnTouch,
  Exp5213,
  ExpFFN,
  ExpMygym,
  ExpUniversity,
  From5213,
  FromFFN,
  FromMyGym,
  FromUniversity,
  TextDes,
  TextHI,
  TextPortfolio,
  TextTouch,
} from './Common'

import BtnView from './BtnView'

const Div = styled.div`
  ${(_p: {}) => css``};
`

type Props = {}

class Mobile extends React.PureComponent<
  Props,
  {
    openHamb: boolean
  }
> {
  constructor(props: Props) {
    super(props)
    this.state = {
      openHamb: false,
    }
  }

  jumpTo = (ev: React.MouseEvent<HTMLLIElement>) => {
    const { to } = ev.currentTarget.dataset

    if (to) {
      animeScrollTo(to)
    }

    this.setState({
      openHamb: false,
    })
  }

  toggleHamb = () => {
    this.setState(s => ({
      openHamb: !s.openHamb,
    }))
  }

  render() {
    const { openHamb } = this.state
    return (
      <Div className={`vportMobile`}>
        <header
          className={cx({
            '-onHamb': openHamb,
          })}
        >
          <div onClick={this.toggleHamb} className={`hamb`}>
            <s />
            <s />
            <s />
          </div>
          <ul className={`hambMenu`}>
            <li onClick={this.jumpTo} data-to="m-about">
              About
            </li>
            <li onClick={this.jumpTo} data-to="m-exp">
              Experiences
            </li>
            <li onClick={this.jumpTo} data-to="m-work">
              Works
            </li>
            <li onClick={this.jumpTo} data-to="m-contact">
              Contact
            </li>
          </ul>
        </header>
        <section className={`profile`} id="m-about">
          <TextHI />
          <div className={`avatar`} />
          <TextDes />
        </section>

        <section className={`exp`} id="m-exp">
          <div data-aos="flip-up">
            <FromMyGym />
          </div>
          <div data-aos="flip-up">
            <ExpMygym />
          </div>

          <div data-aos="flip-up">
            <FromFFN />
          </div>
          <div data-aos="flip-up">
            <ExpFFN />
          </div>

          <div data-aos="flip-up">
            <From5213 />
          </div>
          <div data-aos="flip-up">
            <Exp5213 />
          </div>

          <div data-aos="flip-up">
            <FromUniversity />
          </div>

          <div data-aos="flip-up">
            <ExpUniversity />
          </div>
        </section>

        <section className={`gallery`} id="m-work">
          <h2>
            <span className={`word`}>Portfolio</span>
          </h2>
          <p style={{ marginBottom: '40px' }}>
            <TextPortfolio />
          </p>
          <BtnView />
        </section>

        <section className={`getInTouch`} id="m-contact">
          <TextTouch />
          <BtnTouch />
        </section>
      </Div>
    )
  }
}
export default Mobile
