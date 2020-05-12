import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class ForDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };

  onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    alertify.success(`${JSON.stringify(this.state)} added`);

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Enter email..."
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="Enter password..."
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              name="city"
              type="select"
              id="city"
              placeholder="Enter city..."
              onChange={this.onChangeHandler}
            >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              name="description"
              type="textarea"
              id="description"
              placeholder="Enter description..."
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>

          <Button type="submit">Save</Button>

        </Form>
      </div>
    );
  }
}
