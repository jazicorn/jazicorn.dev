import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Home() {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <>
      <div>Hello World</div>
    </>
  )
}

export default Home
