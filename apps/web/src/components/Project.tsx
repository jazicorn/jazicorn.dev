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

const Project = (data) => {
const { isMobile, isDesktopMDXL, isDesktopXL } = useWindowSize();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const project = data;

  return (
    <main className={`${darkMode ? 'tw-text-white' : 'tw-text-black'}
    ${isMobile && ''} ${isDesktopMDXL && ''} ${isDesktopXL &&  ''} 
    tw-place-items-center tw-h-fit`}> 
        <Transition>
            <ul className={`${isMobile && 'tw-w-[350px] tw-h-[440px] tw-grid-col-auto tw-grid-rows-[50px_200px_200px]'}
                            ${isDesktopMDXL && 'tw-h-[240px] tw-grid-cols-layout-project'}
                            ${isDesktopXL && 'tw-h-[240px] tw-grid-cols-layout-project-xl'}
                             tw-grid`}>
                <li className={`${darkMode ? '' : ''}
                                ${isMobile ? ' tw-flex-row tw-pl-2 tw-justify-left' : 'tw-flex-col '}
                                tw-border tw-border-jazicorn-pink
                                h9 font-playfair-var-italic tw-items-center`}>
                                {project.id}
                </li>
                <li className={`${darkMode ? '' : ''}
                                ${isMobile ? 'tw-border-x' : 'tw-border-y'}
                                tw-grid tw-border-jazicorn-pink`}>
                    <table className="tw-border-collapse  ">
                        <tr className={`${darkMode ? '' : ''}`}>
                            <th>Project</th>
                        </tr>
                        <tr className={`${darkMode ? '' : ''} `}>
                            <td>Alfreds Futterkiste</td>
                        </tr>
                        <tr className={`${darkMode ? '' : ''} `}>
                            <td>Centro comercial Moctezuma</td>
                        </tr>
                    </table>      
                </li>
                <li className="tw-grid tw-border tw-border-jazicorn-pink">
                    <div className={`${darkMode ? '' : ''} `}>
                        
                    </div>
                </li>
            </ul>
        </Transition>
    </main>
  )
}

export default Project