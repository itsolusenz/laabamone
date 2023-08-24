
import { useTranslation } from 'react-i18next';
import FuseNavigation from '@fuse/core/FuseNavigation';

function CalendarAppSidebar() {
  const { t } = useTranslation('navigation');
  const navigationData = [

    {
      id: '1',
      title: <>{t('Catalogue')}</>,
      type: 'group',
      children: [
        {
          id: '1.1',
          title: <>{t('Services')}</>,
          type: 'item',
          url: '/apps/package',

        },
        {
          id: '1.2',
          title: <>{t('Vouchers')}</>,
          type: 'item',
          url: '/apps/voucher',
          // icon: 'heroicons-outline:clipboard-copy',
        },
        {
          id: '1.3',
          title: <>{t('Memberships')}</>,
          type: 'item',
          url: '/apps/memberships',
          // icon: 'heroicons-outline:clipboard-copy',
        },
        {
          id: '1.4',
          title: <>{t('Products')}</>,
          type: 'item',
          url: '/apps/products',
          // icon: 'heroicons-outline:clipboard-copy',
        },


      ],
    },
    {
      id: '2',
      title: <>{t('Inventory')}</>,
      type: 'group',
      children: [
        {
          id: '2.1',
          title: <>{t('Stocktakes')}</>,
          type: 'item',
          url: '/apps/stocktakes',

        },
        /*  {
            id: '2.2',
            title: <>{t('Stock orders')}</>,
            type: 'item',
            url: '/apps/stock-orders',
            // icon: 'heroicons-outline:clipboard-copy',
          },*/
        {
          id: '2.3',
          title: <>{t('Suppliers')}</>,
          type: 'item',
          url: '/apps/supplier',
          // icon: 'heroicons-outline:clipboard-copy',
        },


      ],
    },

  ];

  return (
    <div className="px-12 py-24 min-h-6xl">
      {/*}  <div className="mx-12 text-3xl font-bold tracking-tighter">Sales</div>*/}

      <FuseNavigation navigation={navigationData} className="px-0" />
    </div>
  );
}

export default CalendarAppSidebar;
