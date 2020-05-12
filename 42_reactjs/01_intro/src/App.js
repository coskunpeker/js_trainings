import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import ForDemo1 from "./ForDemo1";
import ForDemo2 from "./ForDemo2";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProductsByCategory(category);
  };

  getProducts = () => {
    fetch(`http://localhost:3004/products`)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((err) => console.log(err));
  };

  getProductsByCategory = (category) => {
    fetch(`http://localhost:3004/products?categoryId=${category.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((err) => console.log(err));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((item) => item.product.id === product.id);

    if (!addedItem) {
      newCart.push({ product: product, quantity: 1 });
      this.setState({ cart: newCart });
    } else {
      addedItem.quantity += 1;
    }

    alertify.success(`${product.productName} added to cart!`);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(
      (cartItem) => cartItem.product.id !== product.id
    );
    this.setState({ cart: newCart });
    alertify.success(`${product.productName} removed from cart!`);
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const categoryInfo = { title: "Category List" };
    const productInfo = { title: "Product List" };

    return (
      <div className="App">
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                categoryInfo={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      productInfo={productInfo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route path="/form1" component={ForDemo1}></Route>
                <Route path="/form2" component={ForDemo2}></Route>
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
