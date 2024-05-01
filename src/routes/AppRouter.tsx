import { Route, Routes } from "react-router-dom";
import { SideBar } from "../components/ui/SideBar/SideBar";
import { NavBarC } from "../components/ui/NavBarC/NavBarC";
import TableComponent from "../components/ui/TableComponent/TableComponent";
import { EmpresaScreens } from "../components/screens/EmpresaScreens/EmpresaScreens";
import { Home } from "../components/screens/Home/Home";
import { ProductoScreens } from "../components/screens/ProductoScreens/ProductoScreens";
import { PromocionesScreens } from "../components/screens/PromocionesScreens/PromocionesScreens";

export const AppRouter = () => {
  return (
    <>
      <NavBarC />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<TableComponent />} />
          <Route path="/empresas" element={<EmpresaScreens />} />
          <Route path="/productos" element={<ProductoScreens />} />
          <Route path="/promociones" element={<PromocionesScreens />} />
        </Routes>
      </div>
    </>
  );
};
