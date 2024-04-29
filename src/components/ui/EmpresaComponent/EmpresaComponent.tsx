import { CardComponent } from "../Card/CardComponent";
import { SearchBar } from "../SearchBar/SearchBar";

export const EmpresaComponent = () => {
  return (
    <>
      <div style={{ display: "block", width: "100%" }}>
        <SearchBar />
        <section style={{ display: "flex" }}>
          <div style={{ margin: "20px" }}>
            <h2>NOMBRE EMPRESA</h2>
            <h3>Sucursales</h3>
          </div>
          <div style={{ alignContent: "center" }}>
            <button className="btn btn-outline-success" type="submit">
              Editar
            </button>
          </div>
        </section>
        <CardComponent />
      </div>
    </>
  );
};
