import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
// icons
// import { 
//     IconHome,
//     IconSun,
//     IconMoon,
//     IconBrandGithub,
//     IconBrandLinkedin 
// } from '@tabler/icons-react';
// hooks
import useWindowSize from '../hooks/useWindowSize';
import Transition from '../hooks/useTransition';

const Resources = () => {
  const { isMobile } = useWindowSize();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Transition>
      <main className={`${darkMode ? 'tw-text-white' : 'tw-text-black'} tw-h-full tw-flex tw-flex-col`}>
        <h1 className="h6 font-playfair-var-italic tw-self-center">Resources</h1>
      </main>
    </Transition>
  )
}

export default Resources