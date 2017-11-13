import delegate from 'delegate-to'
import scrollTo from 'animated-scrollto'
import $ from 'cash-dom'
import AOS from 'aos'
import s from './app.scss'

import { TextHI, TextDes, TextPortfolio, TextTouch, ExpFFN, Exp5213, ExpUniversity,
  From13_9to15_5, From10_7to13_8, From06_9to10_7, BtnTouch, BtnView } from './components/common'

const Desktop = {
  name: 'Desktop',
  methods: {
    jumpTo(ev) {
      const $delegateTarget = $(ev.delegateTarget)
      const to = $delegateTarget.data('to')
      const { top, left } = $(to).offset()

      scrollTo(document.documentElement, top, 400)
    },
    openGallery() {
      this.$refs.lightgalleryItem0.click()
    }
  },

  data() {
    return {
      hasHeaderBar: false,
    }
  },

  mounted() {
    setTimeout(() => {
      AOS.init({
        duration: 1200,
        offset: 200,
        delay: 100,
      })

      // lightGallery(this.$refs.lightgallery, {
      //   mode: 'lg-fade',
      // })
    }, 500)

    window.addEventListener('scroll', () => {
      this.hasHeaderBar = !!window.scrollY
    })
  },

  computed: {
    headerClasses() {
      const { hasHeaderBar } = this
      return {
        [s.hasBar]: hasHeaderBar
      }
    },
  },
  render(h) {
    const { jumpTo, headerClasses } = this
    return (
      <div class={[s.vportDesktop]}>
        <header on-click={delegate('h2', jumpTo)} class={[headerClasses]}>
          <div class={[s.w960, s.fboxBetween]} style={{ height: '100%' }}>
            <h2 data-to="#app">About</h2>
            <h2 data-to="#work-experience">Experiences</h2>
            <div class={[s.logo]} />
            <h2 data-to="#gallery">Works</h2>
            <h2 data-to="#contact">Contact</h2>
          </div>
        </header>

        <section class={[s.profile]}>
          <div class={[s.w960]}>
            <div id="profile" class={[s.w800, s.profile]}>
              <div class={[s.fboxMid]} style={{ padding: `20px 0`, }}>
                <TextHI />
              </div>

              <div class={[s.fboxMid]}>
                <div class={[s.avatar]} />
              </div>

              <div class={[s.fboxMid, s.about,]}>
                <div class={[s.aboutMe]}>
                  <TextDes />
                </div>
              </div>
            </div>
          </div>
          <div id="work-experience" />
        </section>

        <section class={[s.exp]}>
          <div class={[s.w800]}>
            <h2 data-aos="flip-right" hidden>Work Experiences</h2>
            <div class={[s.workExperience]}>
              <div class={[s.workExp]}>
                <div data-aos="fade-right">
                  <From13_9to15_5 />
                </div>
                <div class={[s.periodExp]} data-aos="fade-up">
                  <ExpFFN />
                </div>
              </div>

              <div class={[s.workExp]}>
                <div data-aos="fade-right">
                  <From10_7to13_8 />
                </div>
                <div class={[s.periodExp]} data-aos="fade-up">
                  <Exp5213 />
                </div>
              </div>

              <div class={[s.workExp]}>
                <div data-aos="fade-right">
                  <From06_9to10_7 />
                </div>
                <div class={[s.periodExp]} data-aos="fade-up">
                  <ExpUniversity />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class={[s.gallery]} id="gallery">
          <div class={[s.w960, s.portfolio]}>
            <h2>
              <span class={[s.word]}>Portfolio</span>
            </h2>
            <p class={[s.portfolioDes]}>
              <TextPortfolio />
            </p>
            <BtnView />
          </div>
        </section>

        <section class={[s.getInTouch]} id="contact">
          <div class={[s.w960]}>
            <TextTouch />
            <BtnTouch />
          </div>
        </section>
      </div>
    )
  }
}

export default Desktop
