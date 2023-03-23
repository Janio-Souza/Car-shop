import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private creatCarDomain(car: ICar | null) : Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async registerCar(car: ICar) {
    // Criar instância da Model de Payment usando Mongoose
    const carODM = new CarODM();
    // Inserir os dados no banco
    const newCar = await carODM.creat(car);
    // Retornar os dados com o id
    return this.creatCarDomain(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const allCars = await carODM.findAll();
    return allCars;
  }
}

export default CarService;