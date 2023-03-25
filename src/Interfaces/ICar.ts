import IVehicle from './IVehicle';

interface ICar extends IVehicle {
  doorsQty: number; // contendo quantidade de portas de um carro
  seatsQty: number; // contendo quantidade de assentos de um carro
}

export default ICar;