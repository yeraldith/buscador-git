import React from "react";

class Card extends React.Component {
  render() {
      const {datos}=this.props
    return (
      <div>
        <div className="card mx-auto" style={{ width: 300 }}>
          <img src={datos.avatar_url} className="card-img-top" alt="avatar" />
          <div className="card-body">
            <h5 className="card-title">Nombre: {datos.name}</h5>
            <p className="card-text">Usuario: {datos.login}</p>
            <p className="card-text">Lugar: {datos.location}</p>
          </div>
          <div className="card-body">
            <a href={datos.repos_url} className="card-link">
              Repositorios: {datos.public_repos}
            </a>
            <a href={datos.followers_url} className="card-link">
              Seguidores: {datos.followers}
            </a>
            <a href={datos.following_url} className="card-link">
              Siguiendo: {datos.following}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
