import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle {
  category: string; // contendo categoria da moto (opções: Street, Custom ou Trail)
  engineCapacity: number; // contendo capacidade do motor
}

export default IMotorcycle;