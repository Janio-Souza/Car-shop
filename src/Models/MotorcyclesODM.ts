import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcyclesODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'motorcycles');
  }

  public async findAll() : Promise<IMotorcycle[]> {
    return this.model.find({}, { __v: 0 });
  }

  public async findById(id: string) : Promise<IMotorcycle | null> {
    return this.model.findById({ _id: id }, { __v: 0 });
  }

  public async updateMoto(id: string, motoUpdate: IMotorcycle) : Promise<IMotorcycle | null> {
    return this.model.findByIdAndUpdate({ _id: id }, { ...motoUpdate }, { new: true });
  }
}

export default MotorcyclesODM;