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

  // private findCars(cars: ICar | ICar[] | null) : ICar | ICar[] {
  //   if (cars) {
  //     return cars;
  //   }
  //   return 
  // }

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

  public async findById(id: string) {
    try {
      const carODM = new CarODM();
      const car = await carODM.findById(id);
      if (car === null) return { status: 404, message: { message: 'Car not found' } };
      return { status: 200, message: car };
    } catch (err) {
      return { status: 422, message: { message: 'Invalid mongo id' } };
    }
  }

  public async updateCar(id: string, carUpdate: ICar) {
    try {
      const carODM = new CarODM();
      const car = await carODM.updateCar(id, carUpdate);
      if (car === null) return { status: 404, message: { message: 'Car not found' } };
      return { status: 200, message: car };
    } catch (err) {
      return { status: 422, message: { message: 'Invalid mongo id' } };
    }
  }
}

export default CarService;