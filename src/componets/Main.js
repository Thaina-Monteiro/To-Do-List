import React, { Component } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  font-style: italic;
`;

const Form = styled.form`
  width: 100%;
  text-align: center;
  background-color: #fefae0;
`;
const Input = styled.input`
  width: 30%;
`;

const Button = styled.button`
  background-color: #ffb4a2;
  cursor: pointer;
  width: 20%;
`;
const Add = styled.button`
  background-color: #ccd5ae;
  margin: 0px 5px 0px 5px;
  cursor: pointer;
  width: 6%;
`;
const Div = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
const Remover = styled.button`
  cursor: pointer;
  background-color: #ffb4a2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 35px;
`;

export default class App extends Component {
  state = {
    movie: "",
    listMovie: []
  };

  handleChange = (e) => {
    this.setState({
      movie: e.target.value
    });
  };

  send = () => {
    if (this.state.movie !== "") {
      this.setState({
        listMovie: this.state.listMovie.concat({
          movie: this.state.movie,
          id: Date.now()
        }),
        movie: ""
      });
    }
  };

  remove = (id) => {
    this.setState({
      listMovie: this.state.listMovie.filter((item) => item.id !== id)
    });
  };

  removeAll = (id) => {
    this.setState({
      listMovie: this.state.listMovie.filter((item) => item.listMovie)
    });
  };

  render() {
    return (
      <Form onSubmit={(e) => e.preventDefault()}>
        <H1>TO-DO LIST</H1>
        <Input onChange={this.handleChange} value={this.state.movie} />
        <Add onClick={this.send}>+</Add>
        <Button onClick={() => this.removeAll()}>Remover tudo</Button>
        {this.state.listMovie.map((item) => (
          <Div>
            <ul>
              <li>{item.movie}</li>
            </ul>
            <Remover onClick={() => this.remove(item.id)}>x</Remover>
          </Div>
        ))}
      </Form>
    );
  }
}
