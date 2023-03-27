import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/motorcyclesService'; 

class MotoController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async creatMoto() {
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMoto = await this.service.registerMoto(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }
  public async findAll() {
    try {
      const allCars = await this.service.findAll();
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }
  public async findById() {
    const { id } = this.req.params;

    try {
      const motorCycle = await this.service.findById(id);
      return this.res.status(motorCycle.status).json(motorCycle.message);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMoto() {
    const { id } = this.req.params;
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const motoUpdatede = await this.service.updateMoto(id, moto);
      return this.res.status(motoUpdatede.status).json(motoUpdatede.message);
    } catch (error) {
      this.next(error);
    } 
  }
}

export default MotoController;