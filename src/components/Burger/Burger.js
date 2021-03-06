import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {
    console.log(props)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} /> 
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    console.log("transformed ingredients :", transformedIngredients)
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Ajouter des ingrédients s'il vous plait</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;