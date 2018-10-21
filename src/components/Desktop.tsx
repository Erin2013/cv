import React from 'react'
import styled, { css } from 'styled-components'

import animeScrollTo from '../share/animeScrollTo'
import {
  BtnTouch,
  BtnView,
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

const Div = styled.div`
  ${(_p: {}) => css``};
`

type Props = {}

class Desktop extends React.PureComponent<Props, {}> {
  jumpTo = (ev: React.MouseEvent<HTMLHeadingElement>) => {
    const { to } = ev.currentTarget.dataset

    if (to) {
      animeScrollTo(to)
    }
  }

  render() {
    return (
      <Div className={`vportDesktop`}>
        <header className={`headerClasses`}>
          <div className={`w960 fboxBetween`} style={{ height: '100%' }}>
            <h2 data-to="app" onClick={this.jumpTo}>
              About
            </h2>
            <h2 data-to="work-experience" onClick={this.jumpTo}>
              Experiences
            </h2>
            <div className={`logo`} />
            <h2 data-to="gallery" onClick={this.jumpTo}>
              Works
            </h2>
            <h2 data-to="contact" onClick={this.jumpTo}>
              Contact
            </h2>
          </div>
        </header>

        <section className={`profile`}>
          <div className={`w960`}>
            <div id="profile" className={`w800 profile`}>
              <div className={`fboxMid`} style={{ padding: `20px 0` }}>
                <TextHI />
              </div>

              <div className={`fboxMid`}>
                <div className={`avatar`} />
              </div>

              <div className={`fboxMid about`}>
                <div className={`aboutMe`}>
                  <TextDes />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`exp`} id="work-experience">
          <div className={`w800`}>
            <h2 data-aos="flip-right" hidden={true}>
              Work Experiences
            </h2>
            <div className={`workExperience`}>
              <div className={`workExp`}>
                <div data-aos="fade-right">
                  <FromMyGym />
                </div>
                <div className={`periodExp`} data-aos="fade-up">
                  <ExpMygym />
                </div>
              </div>

              <div className={`workExp`}>
                <div data-aos="fade-right">
                  <FromFFN />
                </div>
                <div className={`periodExp`} data-aos="fade-up">
                  <ExpFFN />
                </div>
              </div>

              <div className={`workExp`}>
                <div data-aos="fade-right">
                  <From5213 />
                </div>
                <div className={`periodExp`} data-aos="fade-up">
                  <Exp5213 />
                </div>
              </div>

              <div className={`workExp`}>
                <div data-aos="fade-right">
                  <FromUniversity />
                </div>
                <div className={`periodExp`} data-aos="fade-up">
                  <ExpUniversity />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`gallery`} id="gallery">
          <div className={`w960 portfolio`}>
            <h2>
              <span className={`word`}>Portfolio</span>
            </h2>
            <p className={`portfolioDes`}>
              <TextPortfolio />
            </p>
            <BtnView />
          </div>
        </section>

        <section className={`getInTouch`} id="contact">
          <div className={`w960`}>
            <TextTouch />
            <BtnTouch />
          </div>
        </section>
      </Div>
    )
  }
}
export default Desktop
