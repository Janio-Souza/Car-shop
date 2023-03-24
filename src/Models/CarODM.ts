import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<any>; // Atributo para criar coleção e fornecer acesso ao banco

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
    // return this.model.aggregate([{ $addFields: { id: '$_id' } }, { $project: { _id: 0, __v: 0 } }]);
    return this.model.find({}, { __v: 0 }); // Ajustar para retornar "id" envez de "_id"
  }

  public async findById(id: string) : Promise<ICar> {
    return this.model.findById({ _id: id }, { __v: 0 }); // Ajustar para retornar "id" envez de "_id"
  }

  public async updateCar(id: string, carUpdate: ICar) : Promise<ICar> {
    await this.model.findOneAndUpdate({ _id: id }, { ...carUpdate });
    return this.model.findById({ _id: id }, { __v: 0 });
  }
}

export default CarODM;
