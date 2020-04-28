import React from "react";
import Buscardor from "../components/Buscador";
import Card from "../components/Card";

class Inicio extends React.Component {
  state = {
    usuario: "",
  };
  handleInputChange = (event) => {
    this.setState({ usuario: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { usuario } = this.state;
    fetch("https://api.github.com/users/" + usuario)
      .then((res) => res.json())
      .then((data) => {
           console.log(data);
        this.setState({
          usuario: data,
        });
      });
  };

  render() {
    return (
      <>
        <Buscardor
          handleChange={this.handleInputChange}
          usuario={this.state.usuario}
          handleSubmit={this.handleSubmit}
        />

        <Card 
        datos={this.state.usuario}
        />
      </>
    );
  }
}
export default Inicio;
