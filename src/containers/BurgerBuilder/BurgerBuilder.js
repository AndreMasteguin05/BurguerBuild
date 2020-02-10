import React, { Component } from "react";

// import { Container } from './styles';
import Aux from "../../hoc/_Aux";
import Burger from "../../components/Burger/Burger";
import BuidControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

export default class BurgerBuilder extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {...}

  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0
  };

  addIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;

    const updateIngredients = {
      ...this.state.ingredients
    };

    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };

  removeIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;

    const updateIngredients = {
      ...this.state.ingredients
    };

    updateIngredients[type] = updateCount;

    const priceDeduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuidControls
          ingredientsAdd={this.addIngredientsHandler}
          ingredientsRemoved={this.removeIngredientsHandler}
        />
      </Aux>
    );
  }
}
