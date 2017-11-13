import s from '../app.scss'

const ExpPeriod = {
  name: 'ExpPeriod',
  props: {
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    radius: {
      type: Number,
      default: 135,
    }
  },
  computed: {
    size() {
      const { radius } = this

      return {
        width: `${radius}px`,
        height: `${radius}px`,
      }
    }
  },
  render(h) {
    const { from, to, size } = this
    return (
      <div class={[s.period]} style={size}>
        <p class={[s.from]}>{from}</p>
        <p class={[s.to]}>{to}</p>
      </div>
    )
  }
}

export default ExpPeriod
