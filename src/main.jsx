import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ChakraProvider} from '@chakra-ui/react';
import Home from './pages/Home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import LinkPage from './pages/LinkPage';
import {getLink} from './api/apiLinks.js';
const router = createBrowserRouter([
  {
    element: <Home />,
    index: true,
  },
  {
    element: <LinkPage />,
    path: '/:hash',
    loader: async ({params}) => {
      try {
        const objectLink = await getLink(params.hash);
        console.log(objectLink);
        if (objectLink.error === undefined)
          import.meta.env.VITE_REDIRECT_TYPE === 'link'
            ? (location.href = objectLink.link)
            : location.replace(objectLink.link);
        return objectLink;
      } catch (err) {
        return {
          error: err.name,
          message: err.message,
        };
      }
    },
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>,
);
