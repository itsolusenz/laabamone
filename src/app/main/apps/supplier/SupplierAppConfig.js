import { lazy } from 'react';
import ContactView from './contact/ContactView';
import ContactForm from './contact/ContactForm';

const SupplierApp = lazy(() => import('./SupplierApp'));
const MembershipApp = lazy(() => import('./Membership/MembershipApp'));
const ProductApp = lazy(() => import('./Product/ProductApp'));
const StocktakesApp = lazy(() => import('./Stocktakes/StocktakesApp'));
const VoucherApp = lazy(() => import('./Voucher/VoucherApp'));
const PackageApp = lazy(() => import('./PackageApp'));
const SupplierAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/supplier',
      element: <SupplierApp />,
      children: [
        {
          path: ':id',
          element: <ContactView />,
        },
        {
          path: ':id/edit',
          element: <ContactForm />,
        },
      ],
    },
    {
      path: 'apps/package',
      element: <PackageApp />,
    },
    {
      path: 'apps/voucher',
      element: <VoucherApp />,
      children: [
        {
          path: ':id',
          element: <ContactView />,
        },
        {
          path: ':id/edit',
          element: <ContactForm />,
        },
      ],
    },
    {
      path: 'apps/memberships',
      element: <MembershipApp />,
    },
    {
      path: 'apps/products',
      element: <ProductApp />,
      children: [
        {
          path: ':id',
          element: <ContactView />,
        },
        {
          path: ':id/edit',
          element: <ContactForm />,
        },
      ],
    },
    {
      path: 'apps/stocktakes',
      element: <StocktakesApp />,
    },


  ],
};

export default SupplierAppConfig;
