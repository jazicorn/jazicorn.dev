import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';
// hooks
import useWindowSize from '../hooks/useWindowSize';

function App() {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className={`${darkMode ? 'tw-bg-black': 'tw-bg-white' } ${isMobile ? '' : ''} 
        font-incon-var tw-w-screen tw-h-screen tw-min-h-screen tw-overflow-scroll`}>
        <div>
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
    </div>
  )
}

export default App
