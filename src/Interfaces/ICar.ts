interface ICar {
  id?: string; // String contendo id do veículo
  model: string; // contendo modelo do veículo
  year: number; // contendo ano de fabricação do veículo
  color: string; // contendo cor principal do veículo
  status?: boolean; // contendo status que define se um veículo pode ou não ser comprado (este atributo deve ser opcional e se não passado, deve ser false)
  buyValue: number; // contendo valor de compra do veículo
  doorsQty: number; // contendo quantidade de portas de um carro
  seatsQty: number; // contendo quantidade de assentos de um carro
}

export default ICar;