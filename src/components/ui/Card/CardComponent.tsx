import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from "@coreui/react"


export const CardComponent = () => {
  return (
    <CCard style={{ width: '18rem',margin:'20px'}}>
  <CCardImage orientation="top" src="vite.svg" />
  <CCardBody>
    <CCardTitle>Sucursal 1</CCardTitle>
    <CCardText>
      Direccion
    </CCardText>
    <CButton color="primary" href="#">Editar</CButton>
  </CCardBody>
</CCard>
  )
}
