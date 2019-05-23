import React, { Component } from 'react';

import Auxilliary from '../../Layout/Auxilliary';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This could be a functionnal component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
        });

        return(
            <Auxilliary>
                <h3>Votre Commande</h3>
                <p>Un Hamburger délicieux avec les ingrédients suivants :</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Prix Total : {this.props.price.toFixed(2)}</strong></p>
                <p>Continuer la commande?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>ANNULER</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUER</Button>
            </Auxilliary>
        );
    }
};

export default OrderSummary;