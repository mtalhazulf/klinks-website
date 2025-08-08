import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Products from '@/pages/Products'
import ProductDetail from '@/pages/ProductDetail'
import Services from '@/pages/Services'
import Resources from '@/pages/Resources'
import Contact from '@/pages/Contact';
import MauaaPage from '@/pages/brands/mauaa';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:productId',
        element: <ProductDetail />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'brands/mauaa',
        element: <MauaaPage />,
      },
    ],
  },
])
