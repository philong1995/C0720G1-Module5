import {IRentType} from './IRentType';
import {IServiceType} from './IServiceType';

export interface IService {
  id?: number;
  name: string;
  area: number;
  cost: number;
  description: string;
  amountPeople: number;
  numberOfFloor: number;
  poolArea: number;
  rentType: IRentType;
  serviceType: IServiceType;
}
