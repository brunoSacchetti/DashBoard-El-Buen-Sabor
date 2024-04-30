import IDomicilio from "./Domicilio";

interface ISucursales extends Base<ISucursales> {

  nombre:string;
  horarioApertura:Date;
  horarioCierre:Date;
  domicilio:IDomicilio;
  
}

export default ISucursales;