import React, { Component } from 'react';

import Auxilliary from '../../components/Layout/Auxilliary'

class BurgerBuilder extends Component {
    render () {
        return (
            <Auxilliary>
                <div>Burger</div>
                <div>Build controls</div>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;