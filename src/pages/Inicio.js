import React from "react";
import Buscardor from "../components/Buscador";
import Card from "../components/Card";
import InfoRepos from "../components/InfoRepos";

class Inicio extends React.Component {
  state = {
    usuario: [],
    repos: [],
    loading: false,
    error: false,
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
      this.repoUsuaruarios()
  };

  repoUsuaruarios = (event) => {
     const { usuario } = this.state;
    fetch(`https://api.github.com/users/${usuario}/repos`)
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
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
          usuario={this.state.usuario}
          handleSubmit={this.handleSubmit}
        />

        <Card datos={this.state.usuario} />

        <InfoRepos result={this.state.repos} />
      </>
    );
  }
}
export default Inicio;
