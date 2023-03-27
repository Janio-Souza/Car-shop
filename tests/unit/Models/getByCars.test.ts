import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

const allCars = [
  {
    id: '6420ea343f634aa93f42d9b8',
    model: 'UNO com escada',
    year: 1999,
    color: 'Red',
    status: true,
    buyValue: 8,
    doorsQty: 2,
    seatsQty: 4,
  },
  {
    id: '6420ed463f634aa93f42d9ba',
    model: 'Opalão 6 caneco',
    year: 1978,
    color: 'Preto',
    status: false,
    buyValue: 18,
    doorsQty: 2,
    seatsQty: 4,
  },
];
describe('Testa funções de buscar carros', function () {
  it('Deveria buscar um carro pelo ID com SUCESSO', async function () {
    const output: Car = new Car(
      {
        id: '6420ea343f634aa93f42d9b8',
        model: 'UNO com escada',
        year: 1999,
        color: 'Red',
        status: true,
        buyValue: 8,
        doorsQty: 2,
        seatsQty: 4,
      },
    );
    sinon.stub(Model, 'findById').resolves(output);

    const service = new CarService();
    const result = await service.findById('6420ea343f634aa93f42d9b8');

    expect(result.status).to.be.equal(200);
    expect(result.message).to.be.deep.equal(output);
  });

  it('Deveria buscar todos os carros com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const service = new CarService();
    const result = await service.findAll();
    
    expect(result).to.be.deep.equal(allCars);
  });

  it('Deve atualizar um carro pelo id', async function () {
    const expectedValue = new Car({
      id: '6420ea343f634aa93f42d9b8',
      model: 'UNO SEM escada',
      year: 1999,
      color: 'Red',
      status: true,
      buyValue: 8,
      doorsQty: 2,
      seatsQty: 4,
    });

    const update = {
      model: 'UNO SEM escada',
      year: 1999,
      color: 'Red',
      status: true,
      buyValue: 8,
      doorsQty: 2,
      seatsQty: 4,
    };
  
    sinon.stub(Model, 'findByIdAndUpdate').resolves(expectedValue);

    const service = new CarService();
    const result = await service.updateCar('6420ea343f634aa93f42d9b8', update);

    expect(result.status).to.be.equal(200);
    expect(result.message).to.be.deep.equal(expectedValue);
  });
  afterEach(function () {
    sinon.restore();
  });
});