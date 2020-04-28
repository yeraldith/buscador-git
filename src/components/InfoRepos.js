import React from "react";

class InfoRepos extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div className="mt-5">
        <table className="table table-dark">
          <thead>
            <tr className="text-center">
              <th scope="col">Lenguaje</th>
              <th scope="col">Rama</th>
              <th scope="col">Url git</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>
          <tbody>
              {result.map((item)=>{
                  return (
                    <tr key={item.id}>
                      <td>{item.language}</td>
                      <td>{item.default_branch}</td>
                      <td>{item.url}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                    </tr>
                  );
              }) }
          </tbody>
        </table>
      </div>
    );
  }
}
export default InfoRepos;
