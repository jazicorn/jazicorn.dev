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


const HeaderDesktop = () => {
const { isMobile, isMobileMD, isDesktopMDXL, isDesktopLG, isDesktopXL } = useWindowSize();
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
    className={`${darkMode ? 'tw-bg-black tw-text-jazicorn-gray ' : 'tw-bg-light'}
                ${isDesktopMDXL && 'tw-border-b tw-border-jazicorn-pink'}
                tw-h-[52px] tw-flex-row tw-border-b tw-border-jazicorn-pink 
                tw-w-full tw-flex tw-justify-around `}>
        <h2 className={`${darkMode ? 'hover:tw-text-jazicorn-pink' : 'hover:tw-text-jazicorn-pink'}
                    font-playfair-var-italic tw-text-xl
                    tw-basis-2/12 tw-flex tw-flex-row tw-items-center tw-place-content-center `}>
            <Link to={`/`}> jazicorn.dev</Link>
        </h2>
        <nav className={`${darkMode ? '' : '' } tw-border-jazicorn-pink tw-border-x 
                        tw-flex tw-flex-row tw-items-center tw-place-content-center tw-gap-2  tw-basis-8/12`}>
            <ol className={`${darkMode ? 'hover:[&>*]:tw-text-white marker:tw-text-jazicorn-pink' : 
            'hover:[&>li]:tw-text-jazicorn-pink marker:tw-text-jazicorn-gray'} tw-pt-1 tw-text-[17px] tw-flex tw-flex-row tw-place-content-center tw-place-items-center tw-gap-8 tw-list-decimal tw-pl-6`}>
                <li className={``}>
                    <Link to={`/`} className="tw-place-self-center">
                        Home
                    </Link>
                </li>
                <li className={``}>
                   <Link to={`/about`} className="tw-place-self-center">
                        About
                    </Link>
                </li>
                <li className={``}>
                   <Link to={`/projects`} className="tw-place-self-center">
                        Projects
                    </Link>
                </li>
                <li className={``}>
                   <Link to={`/blog`} className="tw-place-self-center">
                        Blog
                    </Link>
                </li>
                <li className={``}>
                   <Link to={`/resources`} className="tw-place-self-center">
                        Resources
                    </Link>
                </li>
            </ol>
        </nav>
        <nav className={`tw-flex-row tw-border-jazicorn-pink
                        tw-basis-2/12 tw-flex  tw-items-center tw-place-content-center tw-gap-2 tw-text-sm font-playfair-var-italic-600`}>
            {/* <ul className={`${darkMode ? 'tw-text-jazicorn-gray hover:[&>li]:tw-text-jazicorn-gray-500' : 'hover:[&>li]:tw-text-jazicorn-pink'}
                            ${isDesktopLG && "tw-border-r-2 tw-pr-2 tw-gap-2"}
                            ${isDesktopXL && "tw-border-r-2 tw-pr-4 tw-gap-4"}
                            tw-flex tw-flex-row tw-place-items-center   tw-border-jazicorn-gray-500`}>
               <li className={`${darkMode ? 'tw-border-jazicorn-pink' : 'tw-border-jazicorn-gray'} tw-border tw-px-1`}>
                   <Link to={`/contact`} className="tw-place-self-center">
                        Contact
                    </Link>
                </li>
                <li className={`${darkMode ? 'tw-border-jazicorn-pink' : 'tw-border-jazicorn-gray'} tw-border tw-px-1`}>
                   <Link to={`/resume`} className="tw-place-self-center">
                        Resume
                    </Link>
                </li>
            </ul> */}
            <div className={`tw-flex tw-row tw-h-[26px]`}>
                <ul className={`${darkMode ? 'tw-text-jazicorn-gray hover:[&>li]:tw-text-jazicorn-pink' 
                                : 'hover:[&>li]:tw-text-jazicorn-pink'}
                                tw-border-r-2 tw-border-jazicorn-gray-500 tw-pl-1 tw-pr-3 tw-flex-row tw-flex tw-place-items-center tw-gap-2`}>
                    <li className={`${darkMode ? '' : ''} `}>
                        <a target="_blank" href="https://www.linkedin.com/in/jasmine-anderson-dev/"><IconBrandLinkedin /></a>
                    </li>
                    <li className={`${darkMode ? '' : ''} `}>
                        <a target="_blank" href="https://github.com/jazicorn"><IconBrandGithub /></a>
                    </li>
                </ul>
                <ul className={`${darkMode ? 'hover:[&>*]:tw-text-jazicorn-pink' : 'hover:[&>*]:tw-text-jazicorn-pink'}
                                tw-pl-2.5 tw-pt-1 tw-flex tw-flex-row tw-place-items-center `}>
                {!darkMode ? (
                    <li>
                        <button className="tw-place-self-center" onClick={toggleTheme}>
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
            </div>
        </nav>
    </header>
  )
}

export default HeaderDesktop