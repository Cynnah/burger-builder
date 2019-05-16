import React from 'react';

import Auxilliary from './Auxilliary'

const layout = (props) => (
    <Auxilliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxilliary>
);

export default layout;