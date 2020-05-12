import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    catagories: [],
  };

  getCategories = () => {
    fetch("http://localhost:3004/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ catagories: data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h2>{this.props.categoryInfo.title}</h2>
        <ListGroup>
          {this.state.catagories.map((element) => {
            return (
              <ListGroupItem
                active = {element.categoryName === this.props.currentCategory?true:false}
                onClick={() => this.props.changeCategory(element)}
                key={element.id}
                tag="button" action
              >
                {element.categoryName}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}
