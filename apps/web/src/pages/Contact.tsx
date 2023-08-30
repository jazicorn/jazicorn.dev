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

const Contact = () => {
  const { isMobile } = useWindowSize();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Transition>
      <main className={`${darkMode ? 'tw-text-gray-400 [&_span]:tw-text-jazicorn-pink' : 'tw-text-black [&_span]:tw-text-gray-400'}
      tw-h-full tw-flex tw-flex-col`}>
        <h1 className="h9 font-playfair-var-italic tw-self-center">Contact</h1>
      </main>
    </Transition>
  )
}

export default Contact