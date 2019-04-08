import is from 'is-type-guard'

type CX =
  | {
      [className: string]: boolean
    }
  | string
  | string[]

const cx = (classNames: CX, ...args: string[]): string => {
  let cls = Array.from(classNames as string[])

  if (is.string(classNames)) {
    cls = [classNames, ...args]
  } else if (is.object(classNames)) {
    cls = Object.entries(classNames).reduce(
      (names: string[], [key, value]) => [...names, ...(value ? [key] : [])],
      [],
    )
  }

  return cls.join(' ').trim()
}

export default cx
