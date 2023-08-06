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
import Transition from '../hooks/useTransition';

const Home = () => {
  const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <Transition>
      <main className={`${darkMode ? 'tw-text-white' : 'tw-text-black'}
                        ${isMobile && 'tw-grid-cols-layout-home-mobile tw-grid-rows-layout-home-mobile'} 
                        ${isDesktopMDLG && 'tw-grid-cols-layout-home tw-grid-rows-layout-home'} 
                        ${isDesktopXL && 'tw-grid-cols-layout-home-xl tw-grid-rows-layout-home-xl'} 
                        tw-text-center [&>*]:tw-border-jazicorn-pink tw-h-screen min-h-screen tw-w-full tw-grid `}>
        <article className={`${isMobile ? 'tw-border-t': 'tw-border-x'} tw-h-full tw-w-full tw-flex tw-flex-col tw-place-items-center tw-place-content-center
                            tw-col-start-2 tw-col-end-2 tw-row-span-1  tw-relative`}>
            {/**Backdrop */}
            <div className={`${darkMode ? "tw-bg-jazicorn-gray-400 [&>*]:tw-border-gray-300" : "tw-bg-gray-100 [&>*]:tw-border-jazicorn-pink-300"} 
            tw-grid tw-grid-cols-layout-banner tw-grid-rows-layout-banner tw-relative tw-h-full tw-w-full `}>
              <div className={`${darkMode ? "" : ""} 
                            tw-col-start-3 tw-col-end-7 tw-row-span-1 tw-rounded-bl-2xl tw-border-l-2 tw-border-b-2 tw-border-dotted`}/>
              <div className={`${darkMode ? "" : ""} 
                            tw-col-start-1 tw-col-end-2 tw-row-start-2 tw-row-end-2 tw-rounded-tr-2xl tw-rounded-r-2xl tw-border-r-2 tw-border-y-2 tw-border-dotted`}/>
              <div className={`${darkMode ? "" : ""} 
                            tw-col-start-2 tw-col-end-4 tw-row-start-4 tw-row-end-4 tw-border-2 tw-rounded-2xl tw-border-dotted `}/>
              <div className={`${darkMode ? "" : ""} 
                          tw-col-start-5 tw-col-end-6 tw-row-start-5 tw-row-end-5 tw-border-x-2 tw-border-t-2 tw-rounded-t-2xl tw-border-dotted `}/>
            </div>
            {/**Information */}
            <div className={`${darkMode ? "tw-border-gray-300" : "tw-border-jazicorn-pink-200"} tw-border tw-z-100 tw-absolute tw-place-items-center tw-items-center`}>
              <h1 className={`${isMobile ? 'h9' : 'h7'} `}>Hello, my name is</h1>
              <h2 className={`${isMobile ? 'h8' : 'h6'} break-word tw-text-clip font-playfair-var-italic tw-text-jazicorn-pink`}>
                Jasmine Anderson</h2>
              <section className={`${isMobile ? 'tw-text-xl' : 'tw-text-2xl'} tw-py-4`}>
                <p>I'm a <span className="tw-text-jazicorn-purple">Full-Stack</span> <span className="tw-text-jazicorn-emerald">React </span> 
                Developer with a background in <span className="tw-text-jazicorn-amber">Business Management.</span></p>
              </section>
            </div>
        </article>
        <footer className={`${darkMode ? "" : ""} tw-h-full tw-w-full tw-col-start-1 tw-col-end-4 tw-row-span-2 tw-border-t`}/>
      </main>
    </Transition>
  )
}

export default Home