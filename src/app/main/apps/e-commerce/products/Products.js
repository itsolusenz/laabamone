import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store';
import ProductsHeader from './ProductsHeader';
import ProductsTable from './ProductsTable';
import ProductsList from '../../supplier/ProductList';

function Products() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<ProductsHeader />}
      content={<ProductsList />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('eCommerceApp', reducer)(Products);
