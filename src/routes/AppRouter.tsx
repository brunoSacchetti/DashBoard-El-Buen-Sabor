import { Route, Routes } from "react-router-dom"
import { SideBar } from "../components/SideBar"
import { NavBarC } from "../components/NavBarC"
import TableComponent from "../components/TableComponent/TableComponent";

export const AppRouter = () => {
  return (
    <>
    
        <NavBarC />
        <div style={{display:'flex'}}>
        <SideBar />
        <Routes>
          <Route path="/" element={<TableComponent/>}/>
        </Routes>
        </div>
   </>
  );
};