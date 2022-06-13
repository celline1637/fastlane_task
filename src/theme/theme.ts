import { size } from './breakpoints'
import { colors } from './palette'
import * as position from './position'

const theme = {
  position,
  colors,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
}

export default theme
