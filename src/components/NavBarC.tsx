import { /* CCollapse, */ CContainer, CNavLink, CNavbar, CNavbarBrand, CNavbarNav } from "@coreui/react"


export const NavBarC = () => {
  return (
    <CNavbar expand="lg" className="bg-primary" style={{ flex: '0 0 85%' }}>
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavbarNav as="nav">
          <CNavLink href="/" active>
            Home
          </CNavLink>
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );
};