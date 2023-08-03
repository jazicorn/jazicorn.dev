import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
// icons
import { 
    IconHome,
    IconSun,
    IconMoon,
    IconBrandGithub,
    IconBrandLinkedin 
} from '@tabler/icons-react';
// hooks
import useWindowSize from '../hooks/useWindowSize';

const Header = () => {
const { isMobile } = useWindowSize();
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
    <header
    className={`${darkMode ? 'tw-bg-black tw-text-white' : 'tw-bg-light'} 
                ${isMobile ? 'tw-flex-col [&>*]:tw-w-[200px] tw-divide-y-2 tw-place-items-center [&>*]:tw-place-content-center tw-p-4 [&>*]:tw-p-2' : ' tw-h-[52px] tw-flex-row'}
                tw-border-b tw-border-jazicorn-pink tw-w-full tw-flex tw-justify-around `}>
        <h2 className={`${darkMode ? 'hover:tw-text-jazicorn-pink' : 'hover:tw-text-jazicorn-pink'}
                        ${isMobile ? '' : ''} tw-basis-1/3 
                        tw-text-xl tw-flex tw-flex-row tw- tw-items-center tw-place-content-center font-playfair-var-italic`}>
            <Link to={`/`}> jazicorn.dev</Link>
        </h2>
        <nav className={`${darkMode ? '' : ''} tw-flex tw-flex-row tw-items-center tw-place-content-center tw-gap-2 tw-border-jazicorn-pink  tw-border-x tw-basis-1/3`}>
            <ul className={`${darkMode ? 'tw-text-white hover:[&>li]:tw-text-jazicorn-pink' : 
            'hover:[&>li]:tw-text-jazicorn-pink'} tw-pt-1 tw-text-[17px] tw-flex tw-flex-row tw-place-items-center tw-gap-4`}>
                <li className={`${darkMode ? '' : ''} `}>
                    <Link to={`/about`} className="tw-place-self-center">
                        About
                    </Link>
                </li>
                <li className={`${darkMode ? '' : ''} `}>
                   <Link to={`/projects`} className="tw-place-self-center">
                        Projects
                    </Link>
                </li>
                <li className={`${darkMode ? '' : ''} `}>
                   <Link to={`/`} className="tw-place-self-center">
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
        <nav className="tw-flex tw-flex-row tw-items-center tw-place-content-center tw-gap-2 tw-basis-1/3">
            <ul className={`${darkMode ? 'tw-text-white hover:[&>li]:tw-text-jazicorn-pink' : 
            'hover:[&>li]:tw-text-jazicorn-pink'} tw-flex tw-flex-row tw-place-items-center tw-gap-4`}>
                <li className={`${darkMode ? '' : ''} `}>
                    <a target="_blank" href="https://www.linkedin.com/in/jasmine-anderson-dev/"><IconBrandLinkedin /></a>
                </li>
                <li className={`${darkMode ? '' : ''} `}>
                    <a target="_blank" href="https://github.com/jazicorn"><IconBrandGithub /></a>
                </li>
            </ul>
            <ul className={`${darkMode ? 'hover:[&>*]:tw-text-jazicorn-pink' : 'hover:[&>*]:tw-text-jazicorn-pink'} 
            tw-flex tw-flex-row tw-place-items-center tw-pl-1 tw-pt-2`}>
            {!darkMode ? (
                <li>
                    <button className="tw-place-self-center " onClick={toggleTheme}>
                        <IconSun />
                    </button>
                </li>
            ) : (
                <li>
                    <button className="tw-place-self-center" onClick={toggleTheme}>
                        <IconMoon />
                    </button>
                </li>
            )}
            </ul>
        </nav>
    </header>
  )
}

export default Header