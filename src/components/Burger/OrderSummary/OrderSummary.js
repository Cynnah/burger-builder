import React from 'react';

import Auxilliary from '../../Layout/Auxilliary';

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
            <p>Continuer la commande?</p>
        </Auxilliary>
    );
};

export default orderSummary;