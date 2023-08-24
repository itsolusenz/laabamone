import { React } from 'react';
import { lazy } from 'react';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
const Orders = lazy(() => import('../../apps/e-commerce/orders/Orders'));
export default function DemoContent(props) {

    const { leftSidebarToggle, rightSidebarToggle } = props;
    return (
        <>
            {leftSidebarToggle && (
                <div className="flex shrink-0 items-center">
                    <IconButton onClick={leftSidebarToggle} aria-label="toggle sidebar">
                        <FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
                    </IconButton>
                </div>
            )}


            <Orders />
        </>
    );

}


