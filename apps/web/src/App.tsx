import { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import type { Location, Params } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/header/Header';
// hooks
import useWindowSize from './hooks/useWindowSize';

const getRoutePath = (location: Location, params: Params): string => {
  const { pathname } = location;
  if (!Object.keys(params).length) {
    return pathname; // we don't need to replace anything
  }
  let path = pathname;
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      path = path.replace(paramValue, `:${paramName}`);
    }
  });
  return path;
};

function App() {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

    const location = useLocation();
  const params = useParams();
  
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(getRoutePath(location, params));
  }, [location, params]);

  return (
    <div className={`${darkMode ? 'tw-bg-black': 'tw-bg-white' } ${isMobile ? '' : ''} 
    tw-h-screen font-incon-var tw-w-screen tw-overflow-scroll`}>
    <Header />
    <Outlet />
  </div>
  )
}

export default App
