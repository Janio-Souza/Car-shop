import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<ICar>; // Atributo para criar coleção e fornecer acesso ao banco

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }
  public async creat(car: ICar) : Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll() : Promise<ICar[]> {
    return this.model.find({}, { __v: 0 });
  }

  public async findById(id: string) : Promise<ICar | null> {
    return this.model.findById({ _id: id }, { __v: 0 });
  }

  public async updateCar(id: string, carUpdate: ICar) : Promise<ICar | null> {
    // if (!isValidObjectId(id)) {
    //   throw Error('Invalid mongo id');
    // }
    return this.model.findByIdAndUpdate({ _id: id }, { ...carUpdate }, { new: true });
  }
}

export default CarODM;