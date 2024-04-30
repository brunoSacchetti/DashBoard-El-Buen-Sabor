import { Route, Routes } from "react-router-dom";
import { SideBar } from "../components/ui/SideBar/SideBar";
import { NavBarC } from "../components/ui/NavBarC/NavBarC";
import TableComponent from "../components/ui/TableComponent/TableComponent";
import { EmpresaScreens } from "../components/screens/EmpresaScreens/EmpresaScreens";
import { Home } from "../components/screens/Home/Home";

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
        </Routes>
      </div>
    </>
  );
};
