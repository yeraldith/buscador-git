import React from "react";

class Buscardor extends React.Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="card-body  mx-auto" style={{ width: 400 }}>
          <div className="row">
            <input
              placeholder="Nombre de usuario"
              type="text"
              className="form-control col-8"
              id="usuario"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              onSubmit={handleSubmit}
              className=" col-4 btn btn-outline-info"
            >
              {" "}
              Buscar
              <img
                src="https://img.icons8.com/ios/64/000000/google-web-search.png"
                alt="iconobuscar"
                height="25"
              />
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Buscardor;
