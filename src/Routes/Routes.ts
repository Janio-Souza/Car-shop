import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotoController from '../Controllers/motoController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAll(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateCar(),
);

routes.post(
  '/motorcycles',
  (req, res, next) => new MotoController(req, res, next).creatMoto(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotoController(req, res, next).findAll(),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotoController(req, res, next).findById(),
);

routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotoController(req, res, next).updateMoto(),
);

export default routes;
