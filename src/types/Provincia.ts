import Localidad from "./Localidad"
import Pais from "./Pais"
interface IProvincia extends Base<IProvincia> {
  calle:string;
  localidad: Localidad[];
  pais: Pais;

}

export default IProvincia;