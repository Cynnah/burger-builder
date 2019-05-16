import React, { Component } from 'react';

import Auxilliary from '../../components/Layout/Auxilliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render () {
        return (
            <Auxilliary>
                <Burger />
                <div>Build controls</div>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;