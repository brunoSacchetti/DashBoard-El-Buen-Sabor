import { useEffect, useState } from "react";
import IPromocion from "../../../types/Promocion";
import { PromocionService } from "../../../services/PromocionService";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/modalSlice";
import { SearchBar } from "../../ui/SearchBar/SearchBar";
import "./PromocionesScreens.module.css";

export const PromocionesScreens = () => {
    const [promociones, setPromociones] = useState<IPromocion[]>([]);

  const promocionService = new PromocionService(
    "http://localhost:3000/promociones"
  );

  const dispatch = useDispatch();
  //const showModal = useSelector(state: RootState) => state.modal.showModal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promoData = await promocionService.getAll();
        setPromociones(promoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddSucursalClick = () => {
      dispatch(openModal()); // Dispatcha la acción para abrir el modal
    };

  /* const handleCloseModal = () => {
      dispatch(closeModal()); // Dispatcha la acción para cerrar el modal
    }; */
    
    return (
    <>
        <div>
            <SearchBar add={"Agregar Promocion"} onAddSucursalClick={handleAddSucursalClick}/>
            <table>
                <thead>
                    <tr>
                        <th>Imagen(es)</th>
                        <th>Denominación</th>
                        <th>Descripción del Descuento</th>
                        <th>Precio Promocional</th>
                        <th>Tipo de Promoción</th>
                        <th>Fechas y Horas</th>
                        <th>Artículos de Insumo</th>
                    </tr>
                </thead>
                <tbody>
                    {promociones.map((promo) => (
                        <tr key={promo.id}>
                            <td>
                                {promo.imagenes.map((img, index) => (
                                    <img key={index} src={img.url} alt="Imagen de promoción" className="promo-image"/>
                                ))}
                            </td>
                            <td>{promo.denominacion}</td>
                            <td>{promo.descripcionDescuento}</td>
                            <td>${promo.precioPromocional.toFixed(2)}</td>
                            <td>{promo.tipoPromocion}</td>
                            <td>Desde {promo.fechaDesde} hasta {promo.fechaHasta} de {promo.horaDesde} a {promo.horaHasta}</td>
                            <td>
                                {promo.articulos.map((art, index) => (
                                    <div key={index}>{art.nombre} (x{art.cantidad})</div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
    
    </>
  )
}
