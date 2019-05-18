import React, { Component } from 'react';

import Auxilliary from '../../components/Layout/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Build Controls/BuildControls';

const INGREDIENT_PRICES = { // <--- *** CONSTANTES GLOBALES ***
    salad: 0.5,
    cheese:0.7,
    meat: 2,
    bacon: 0.6
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 7
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]; // Besoin de savoir combien il y a d'ingredients
        const updatedCounted = oldCount + 1; // J'augmente de 1 un ingredients 
        const updatedIngredients = {
            ...this.state.ingredients // Je répartis les propriétés de l'ancien etat des ingredients dans le nouvel objet que je crée ici
        };
        updatedIngredients[type] = updatedCounted // Je prends mon objet updated ingredient et je definis le nombre la valeur correspondant au nombre d'ingredient = a updatedCount
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {

    }

    render () {
        return (
            <Auxilliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}/>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;