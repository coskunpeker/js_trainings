import React, { Component } from "react";

export default class ForDemo1 extends Component {
  state = { username: "", city:"", country:"" };

  onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]:value});
  };

  onSubmitHandler = (event) => {
    alert(this.state.username);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input name="username" onChange={this.onChangeHandler} type="text"></input>
          <h3>User name is {this.state.username}</h3>

          <h3>City</h3>
          <input name ="city" onChange={this.onChangeHandler} type="text"></input>
          <h3>City is {this.state.city}</h3>

          <h3>Country</h3>
          <input name ="country" onChange={this.onChangeHandler} type="text"></input>
          <h3>Country is {this.state.country}</h3>

          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
