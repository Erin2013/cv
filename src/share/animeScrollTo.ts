import anime from 'animejs'

const animeScrollTo = (elementID: string) => {
  const $el = document.getElementById(elementID)

  if (!$el) {
    new Error(`Could not find Element's id: ${elementID}`)
    return
  }

  const targets = {
    y: window.scrollY,
  }
  const { top } = $el.getBoundingClientRect()

  anime({
    targets,
    duration: 300,
    easing: 'linear',
    y: top + window.scrollY,
    update() {
      window.scrollTo(0, targets.y)
    },
  })
}

export default animeScrollTo
