import { Route, Routes } from "react-router-dom"
import { SideBar } from "../components/SideBar"
import { NavBarC } from "../components/NavBarC"
import TableComponent from "../components/TableComponent/TableComponent";
import { EmpresaComponent } from "../components/EmpresaComponent/EmpresaComponent";

export const AppRouter = () => {
  return (
    <>
    
        <NavBarC />
        <div style={{display:'flex'}}>
        <SideBar />
        <Routes>
          <Route path="/" element={<TableComponent/>}/>
          <Route path="/empresas" element={<EmpresaComponent/>}/>
        </Routes>
        </div>
   </>
  );
};