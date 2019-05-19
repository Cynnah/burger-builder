import React, { Component } from 'react';

import Auxilliary from '../../components/Layout/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Build Controls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 7,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({
            purchasable: sum > 0
        });
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    render () {
        const disabledInfo = { // Ici copie de l'objet du state de façon immuable
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxilliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice} />
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;