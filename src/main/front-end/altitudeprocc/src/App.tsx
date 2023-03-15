import { Button } from './components/atoms/Button/Button'
import { GlobalStyle } from './Global.style'
import { ReactComponent as Plus } from './assets/plus.svg'
import { ReactComponent as Next } from './assets/next.svg'
import { Logo } from './components/atoms/Logo/Logo'
import { Text } from './components/atoms/Text/Text'
import { Home } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
  <>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<h1>Hello</h1>}/>
    </Routes>
  </>
  )
}

export default App
