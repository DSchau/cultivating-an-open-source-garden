import Intro from './sections/01-intro.mdx'
import GatsbyOSS from './sections/02-oss-at-gatsby.mdx'
import Gardeners from './sections/03-gardeners.mdx'
import How from './sections/04-how.mdx'
import Automation from './sections/05-automation.mdx'
import FocusOnYou from './sections/06-focus-on-you.mdx'
import Conclusion from './sections/99-conclusion.mdx'

export { default as theme } from './theme'

export default [
  ...Intro,
  ...GatsbyOSS,
  ...Gardeners,
  ...How,
  ...Automation,
  ...FocusOnYou,
  ...Conclusion
]
