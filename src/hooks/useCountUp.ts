import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  decimals?: number
  separator?: string
  duration?: number
}

function formatNumber(value: number, decimals: number, separator: string) {
  const fixed = value.toFixed(decimals)
  const [intPart, decimalPart] = fixed.split('.')
  const withSeparator = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  return decimalPart ? `${withSeparator}.${decimalPart}` : withSeparator
}

export function useCountUp(target: number, options: UseCountUpOptions = {}) {
  const { decimals = 0, separator = ',', duration = 1500 } = options
  const [value, setValue] = useState(0)
  const frameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const startValue = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(startValue + (target - startValue) * eased)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, duration])

  return formatNumber(value, decimals, separator)
}
