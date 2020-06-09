import React from "react";
import Buscardor from "../components/Buscador";
import Card from "../components/Card";
import InfoRepos from "../components/InfoRepos";

class Inicio extends React.Component {
  state = {
    usuario: {},
    repos: [],
    nombre:"",
    loading: false,
    error: false,
  };
  handleInputChange = (event) => {
    this.setState({ nombre: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {nombre } = this.state;
    fetch("https://api.github.com/users/" + nombre)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          usuario: data,
        });
      });
    this.repoUsuaruarios();
  };

  repoUsuaruarios = () => {
    const { nombre } = this.state;
    fetch(`https://api.github.com/users/${nombre}/repos`)
      .then((resp) => resp.json())
      .then((result) => {
        this.setState({
          repos: result,
        });
      });
  };

  render() {
    return (
      <>
        <Buscardor
          handleChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />

        <Card datos={this.state.usuario} />

        <InfoRepos result={this.state.repos} />
      </>
    );
  }
}
export default Inicio;
