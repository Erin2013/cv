type CX =
  | {
      [className: string]: boolean
    }
  | string
  | string[]

const cx = (classNames: CX, ...args: string[]): string => {
  let cls = Array.from(classNames as string[])

  if (typeof classNames === 'string') {
    cls = [classNames, ...args]
  }

  if (!Array.isArray(classNames) && typeof classNames === 'object') {
    cls = Object.entries(classNames).reduce(
      (names: string[], [key, value]) => [...names, ...(value ? [key] : [])],
      [],
    )
  }

  return cls.join(' ').trim()
}

export default cx
