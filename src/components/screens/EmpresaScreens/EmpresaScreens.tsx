import { CardComponent } from "../../ui/Card/CardComponent";
import { SearchBar } from "../../ui/SearchBar/SearchBar";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import IEmpresa from "../../../types/Empresa";
import { EmpresaService } from "../../../services/EmpresaService";
import FormModal from "../../ui/Modal/FormModal";
import { openModal,closeModal } from "../../../redux/slices/modalSlice";
import { RootState } from "../../../redux/rootState/rootState";


const empresaService = new EmpresaService("http://localhost:3000/empresas");

export const EmpresaScreens: React.FC = () => {
  const [empresas, setEmpresas] = useState<IEmpresa[]>([]);

  

  const dispatch = useDispatch();
  const showModal = useSelector((state: RootState) => state.modal.showModal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const empresasData = await empresaService.getAll();
        setEmpresas(empresasData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddSucursalClick = () => {
    dispatch(openModal()); // Dispatcha la acción para abrir el modal
  };

  const handleCloseModal = () => {
    dispatch(closeModal()); // Dispatcha la acción para cerrar el modal
  };

  return (
    <>
      <div style={{ display: "block", width: "100%" }}>
        <SearchBar add={"Agregar Sucursal"} onAddSucursalClick={handleAddSucursalClick} />
        <section style={{ display: "flex" }}>
          {empresas.map((empresa, index) => (
            <div key={index} style={{ margin: "20px" }}>
              <h2>{empresa.nombre}</h2>
              <h3>Sucursales</h3>
              <div style={{ alignContent: "center" }}>
                <button className="btn btn-outline-success" type="submit">
                  Editar
                </button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <CardComponent key={index} sucursales={empresa.sucursales} />
              </div>
            </div>
          ))}
        </section>
      </div>
      {showModal && <FormModal handleCloseModal={handleCloseModal} title={"Nueva Sucursal"} />}
    </>
  );
};