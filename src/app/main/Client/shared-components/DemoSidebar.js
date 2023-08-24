import FuseNavigation from '@fuse/core/FuseNavigation';
import { useTranslation } from 'react-i18next';
{/*} {
    id: '1',
    title: 'Actions',
    subtitle: 'Task, project & team',
    type: 'group',
    children: [
      {
        id: '1.1',
        title: 'Create task',
        type: 'item',
        icon: 'heroicons-outline:plus-circle',
      },
      {
        id: '1.2',
        title: 'Create team',
        type: 'item',
        icon: 'heroicons-outline:user-group',
      },
      {
        id: '1.3',
        title: 'Create project',
        type: 'item',
        icon: 'heroicons-outline:briefcase',
      },
      {
        id: '1.4',
        title: 'Create user',
        type: 'item',
        icon: 'heroicons-outline:user-add',
      },
      {
        id: '1.5',
        title: 'Assign user or team',
        subtitle: 'Assign to a task or a project',
        type: 'item',
        icon: 'heroicons-outline:badge-check',
      },
    ],
  },*/}
  


function DemoSidebar() {
  const { t } = useTranslation('ClientPage');
  const navigationData = [
 
    {
      id: '2',
      title: <>{t('Clients')}</>,
      type: 'group',
      children: [
        {
          id: '2.1',
          title: <>{t('Clients list')}</>,
          type: 'item',
          url: '/client',
       
        },
        {
          id: '2.2',
          title: <>{t('Reviews')}</>,         
          type: 'item',
         // icon: 'heroicons-outline:clipboard-copy',
        },
        {
          id: '2.3',
          title: <>{t('Forms')}</>,          
          type: 'item',
         // icon: 'heroicons-outline:clipboard-copy',
        },
        {
          id: '2.4',
          title: <>{t('Notification')}</>,          
          type: 'item',
         // icon: 'heroicons-outline:clipboard-copy',
        },
        
         ],
    },
   
  ];
  return (
    <div className="px-12 py-24 min-h-6xl">
    {/*}  <div className="mx-12 text-3xl font-bold tracking-tighter">Sales</div>*/}

      <FuseNavigation  navigation={navigationData} className="px-0"  />
    </div>
  );
}

export default DemoSidebar;
