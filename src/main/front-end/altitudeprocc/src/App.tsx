import { Button } from './components/atoms/Button/Button'
import { GlobalStyle } from './Global.style'
import { ReactComponent as Plus } from './assets/plus.svg'
import { ReactComponent as Next } from './assets/next.svg'
import { Logo } from './components/atoms/Logo/Logo'
import { Text } from './components/atoms/Text/Text'
import { Home } from './pages/Home/Home'

function App() {

  return (
  <>
    <GlobalStyle/>
    <Home />
  </>
  )
}

export default App
