import React from 'react';

import Auxilliary from '../../Layout/Auxilliary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

    return (
        <Auxilliary>
            <h3>Votre Commande</h3>
            <p>Un Hamburger délicieux avec les ingrédients suivants :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Prix Total : {props.price.toFixed(2)}</strong></p>
            <p>Continuer la commande?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>ANNULER</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUER</Button>
        </Auxilliary>
    );
};

export default orderSummary;