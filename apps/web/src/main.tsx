/**CSS*/
import './styles/tailwind.input.css'
import { MantineProvider } from '@mantine/core'
/**Custom Day/Night Context*/
import { ThemeProvider } from './context/ThemeContext.tsx'
/**React*/
import React from 'react'
import ReactDOM from 'react-dom/client'
/**React Redux*/
// import { Provider } from 'react-redux'
// import store from './redux/store.ts'
/**React Router*/
import { RouterProvider, createBrowserRouter as Router, createRoutesFromElements, Route} from 'react-router-dom'
import ErrorBoundary from "./ErrorBoundary.tsx";
/**React Query */
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
/**Pages*/
import App from './pages/App.tsx';
/**Components*/
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Resources from './components/Resources.tsx';
import Resume from './components/Resume.tsx';
import Blog from './components/Blog.tsx';

const router = Router(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
      <Route path="" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route path="about" element={<About/>} errorElement={<ErrorBoundary />}/>
      <Route path="projects" element={<Projects/>} errorElement={<ErrorBoundary />}/>
      <Route path="contact" element={<Contact/>} errorElement={<ErrorBoundary />}/>
      <Route path="resources" element={<Resources/>} errorElement={<ErrorBoundary />}/>
      <Route path="resume" element={<Resume/>} errorElement={<ErrorBoundary />}/>
      <Route path="blog" element={<Blog/>} errorElement={<ErrorBoundary />}/>
    </Route>
  )
)

// Create a react-query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <ThemeProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </MantineProvider>
      </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>
)