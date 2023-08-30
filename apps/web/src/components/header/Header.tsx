import { useContext } from 'react';
import { Link } from 'react-router-dom';
// hooks
import useWindowSize from '../../hooks/useWindowSize';
import { ThemeContext } from '../../context/ThemeContext';
// icons
import { 
    IconHome,
    IconSun,
    IconMoon,
    IconMail,
    IconBrandGithub,
    IconBrandLinkedin 
} from '@tabler/icons-react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';


const Header = () => {
const { isMobile, isDesktop } = useWindowSize();
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  //turn darkmode on and off
  const toggleTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE', darkMode: false })
      localStorage.theme = 'light'
    } else {
      theme.dispatch({ type: 'DARKMODE', darkMode: true })
      localStorage.theme = 'dark'
    }
  }

  return (
    <div className={`${darkMode ? 'tw-bg-black tw-text-jazicorn-gray ' : 'tw-bg-light'}`}>
        {isMobile && <HeaderMobile/>}
        {isDesktop && <HeaderDesktop/>}
    </div>
  )
}

export default Header