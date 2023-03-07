import { useWindowSize } from './useWindowSize'

export const usePlayerPositionStyle = () => {
  const { width = 0, height = 0 } = useWindowSize()

  const adjustHeight = (9 / 16) * width
  const adjustedWidth = height * (16 / 9)

  if (width >= adjustedWidth) {
    const reAdjustedHeight = adjustedWidth * (9 / 16)

    return {
      width: adjustedWidth,
      height: reAdjustedHeight,
    }
  } else {
    const reAdjustedWidth = adjustHeight * (16 / 9)

    return {
      height: adjustHeight,
      width: reAdjustedWidth,
    }
  }
}
