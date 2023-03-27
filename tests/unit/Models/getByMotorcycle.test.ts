import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcyclesService from '../../../src/Services/motorcyclesService';

describe('Testa funções de buscar motos', function () {
  it('Deveria buscar uma moto pelo ID com SUCESSO', async function () {
    const output: Motorcycle = new Motorcycle(
      {
        id: '6420f3473f634aa93f42d9c2',
        model: 'Honda Titan 150 ks',
        year: 2005,
        color: 'Preta',
        status: true,
        buyValue: 8,
        category: 'Cyti',
        engineCapacity: 150,
      },
    );
    sinon.stub(Model, 'findById').resolves(output);

    const service = new MotorcyclesService();
    const result = await service.findById('6420f3473f634aa93f42d9c2');

    expect(result.status).to.be.equal(200);
    expect(result.message).to.be.deep.equal(output);
  });

  it('Deveria buscar todas as motos com SUCESSO', async function () {
    const allMotos = [
      {
        id: '6420f2ad3f634aa93f42d9bd',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '6420f2e43f634aa93f42d9bf',
        model: 'Honda Titan 150 ks',
        year: 2005,
        color: 'Preta',
        status: true,
        buyValue: 8,
        category: 'Cyti',
        engineCapacity: 150,
      },
    ];

    sinon.stub(Model, 'find').resolves(allMotos);

    const service = new MotorcyclesService();
    const result = await service.findAll();
    
    expect(result).to.be.deep.equal(allMotos);
  });

  it('Deve atualizar uma moto pelo id', async function () {
    const expectedValue = new Motorcycle({
      id: '6420f2e43f634aa93f42d9bf',
      model: 'Honda Fan 160 Esd',
      year: 2019,
      color: 'Prata',
      status: true,
      buyValue: 15000,
      category: 'Cyti',
      engineCapacity: 160,
    });

    const update = {
      model: 'Honda Fan 160 Esd',
      year: 2019,
      color: 'Prata',
      status: true,
      buyValue: 15000,
      category: 'Cyti',
      engineCapacity: 160,
    };
  
    sinon.stub(Model, 'findByIdAndUpdate').resolves(expectedValue);

    const service = new MotorcyclesService();
    const result = await service.updateMoto('6420f2e43f634aa93f42d9bf', update);

    expect(result.status).to.be.equal(200);
    expect(result.message).to.be.deep.equal(expectedValue);
  });
  afterEach(function () {
    sinon.restore();
  });
});