import { Route, Routes } from "react-router-dom"
import { SideBar } from "../components/SideBar"
import { NavBarC } from "../components/NavBarC"

export const AppRouter = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: '1' }}> {/* ARREGLAR EL CSS  */}
        <NavBarC />
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
    </div>
  );
};