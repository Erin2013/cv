import s from './app.scss'
import { TextHI, TextDes, TextPortfolio, TextTouch, ExpFFN, Exp5213, ExpUniversity,
  From13_9to15_5, From10_7to13_8, From06_9to10_7, BtnView, BtnTouch } from './components/common'

import scrollTo from 'animated-scrollto'
import $ from 'cash-dom'
import delegate from 'delegate-to'

const Mobile = {
  name: 'Mobile',
  data() {
    return {
      openHamb: false
    }
  },
  methods: {
    jumpTo(ev) {
      const $delegateTarget = $(ev.delegateTarget)
      const to = $delegateTarget.data('to')
      const { top, left } = $(to).offset()

      scrollTo(document.documentElement, top, 400)
      this.openHamb = false
    },
    toggleHamb() {
      this.openHamb = !this.openHamb
    }
  },

  mounted() {

  },
  computed: {
    hambClasses() {
      const { openHamb } = this

      return {
        [s['-onHamb']]: openHamb
      }
    }
  },

  render(h) {
    const { $slots, hambClasses, toggleHamb, jumpTo } = this
    return (
      <div class={[s.vportMobile]}>
        <header class={[hambClasses]}>
          <div onClick={toggleHamb} class={[s.hamb]}>
            <s></s>
            <s></s>
            <s></s>
          </div>
          <ul class={[s.hambMenu]} onClick={delegate('li', jumpTo)} >
            <li data-to="#m-about">About</li>
            <li data-to="#m-exp">Experiences</li>
            <li data-to="#m-work">Works</li>
            <li data-to="#m-contact">Contact</li>
          </ul>
        </header>
        <section class={[s.profile]} id="m-about">
          <TextHI />
          <div class={[s.avatar]}/>
          <TextDes />
        </section>

        <section class={[s.exp]} id="m-exp">
          <From13_9to15_5 data-aos="flip-up" />
          <ExpFFN data-aos="fade-up" />


          <From10_7to13_8 data-aos="flip-up" />
          <Exp5213 data-aos="fade-up" />


          <From06_9to10_7 data-aos="flip-up" />
          <div class={[]}>
            <ExpUniversity data-aos="fade-up" />
          </div>
        </section>

        <section class={[s.gallery]} id="m-work">
          <h2>
            <span class={[s.word]}>Portfolio</span>
          </h2>
          <p style={{marginBottom: '40px'}}>
            <TextPortfolio />
          </p>
          <BtnView />
        </section>

        <section class={[s.getInTouch]} id="m-contact">
          <TextTouch />
          <BtnTouch />
        </section>
      </div>
    )
  }
}

export default Mobile
