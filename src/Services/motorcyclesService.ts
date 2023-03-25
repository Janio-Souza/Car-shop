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

  public async findAll() {
    const carODM = new MotorcyclesODM();
    const allCars = await carODM.findAll();
    return allCars.map((elem) => this.motoDomain(elem));
  }

  public async findById(id: string) {
    try {
      const carODM = new MotorcyclesODM();
      const car = await carODM.findById(id);
      if (car === null) return { status: 404, message: { message: 'Motorcycle not found' } };
      return { status: 200, message: this.motoDomain(car) };
    } catch (err) {
      return { status: 422, message: { message: 'Invalid mongo id' } };
    }
  }
}

export default MotorcyclesService;