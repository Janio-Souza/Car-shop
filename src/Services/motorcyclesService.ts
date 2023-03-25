import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import Motorcycle from '../Domains/Motorcycle';

class MotorcyclesService {
  private motoDomain(moto: IMotorcycle) {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async registerMoto(moto: IMotorcycle) {
    const motorcyclesODM = new MotorcyclesODM();
    const newMoto = await motorcyclesODM.create(moto);
    return this.motoDomain(newMoto);
  }
}

export default MotorcyclesService;