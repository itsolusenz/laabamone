import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Product = lazy(() => import('./product/Product'));
const Products = lazy(() => import('./products/Products'));
const Sales = lazy(() => import('../../user-interface/page-layouts/carded/with-sidebars/CardedWithSidebarsContentScrollComponent'));

const Productlist = lazy(() => import('../../user-interface/page-layouts/carded/with-sidebars/productlist'));


//const Order = lazy(() => import('./order/Order'));
const Orders = lazy(() => import('./orders/Orders'));

const ECommerceAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/e-commerce/products',
      element: <Products />,
    },
  {
      path: 'apps/e-commerce/products/:productId/*',
      element: <Product />,
    },
    {
      path: 'sales/:productId/*',
      element: <Sales />,
    },
    {
      path: 'product',
      element: <Productlist />,
    },
    
  {
      path: 'apps/e-commerce/orders',
      element: <Orders />,
    },
     /*{
      path: 'apps/e-commerce/orders/:orderId',
      element: <Order />,
    },*/
    {
      path: 'apps/e-commerce',
      element: <Navigate to="products" />,
    },
  ],
};

export default ECommerceAppConfig;
