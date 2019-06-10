import Intro from './sections/01-intro.mdx'
import GatsbyOSS from './sections/02-oss-at-gatsby.mdx'
import Conclusion from './sections/99-conclusion.mdx'

export { default as theme } from './theme'

export default [
  ...Intro,
  ...GatsbyOSS,
  ...Conclusion
]
